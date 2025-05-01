import { motion } from "framer-motion";

export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  Font,
  disabled,
  loading,
  AriaLabel,
  target = "",
  href,
}) {
  const base = `focus:outline-hidden w-full flexCenter gap-1 rounded-md py-3 px-2 relative
   transition-all duration-300 font-bold cursor-pointer
  ${(disabled || loading) && "cursor-not-allowed! border-main! bg-light/35! text-main!"}`;

  const styles = {
    primary: `bg-secondary text-white border-primary
      ${!disabled && !loading && "hover:bg-secondary/60 active:bg-secondary/60 hover:border"}`,
    secondary: `bg-main text-primary border border-secondary
    ${!disabled && !loading && "hover:bg-secondary hover:text-white hover:border-primary"}`,
    delete: `bg-error text-light-color border-darkB
      ${!disabled && !loading && "hover:bg-error/90"}`,
  };

  if (href)
    return (
      <motion.a
        href={href}
        className={`${base} ${styles[variation]} ${Font}`}
        title={AriaLabel}
        aria-label={AriaLabel}
        target={target}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.125, ease: "easeInOut" }}
      >
        {children}
      </motion.a>
    );

  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${base} ${styles[variation]} ${Font}`}
      aria-label={AriaLabel}
      title={AriaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.125, ease: "easeInOut" }}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-secondary h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
          <div className="bg-secondary h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
          <div className="bg-secondary h-3 w-3 animate-bounce rounded-full"></div>
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}
