import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: opensWindowName, children }) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Open must be used within Modal");

  const { open } = context;
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Window must be used within Modal");

  const { openName, close } = context;

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (name === openName) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [name, openName, close]);

  return createPortal(
    <AnimatePresence>
      {name === openName && (
        <>
          <motion.div
            key="overlay"
            className="fixed top-0 left-0 z-[110] h-full w-full bg-[#00000050] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-[10000000] flex h-full w-full items-center justify-center"
          >
            <div className="bg-main relative z-50 max-h-[80vh] w-[90%] rounded-lg shadow-md md:w-[750px]">
              <button
                aria-label="Close"
                title="Close"
                onClick={close}
                className="bg-error absolute top-[10px] right-[10px] rounded p-1"
              >
                <FaTimes />
              </button>
              <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
