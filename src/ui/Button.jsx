import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.125, ease: "easeInOut" },
};

const sizeStyles = {
  small: "px-2 py-1 text-xs sm:text-sm",
  medium: "px-3 py-2 text-sm sm:text-base",
  large: "px-6 py-4 text-lg sm:text-xl",
  actions: "px-[5px] !text-xs sm:!text-sm !w-fit !border !min-h-[30px]",
};

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
  size = "medium",
  replace = false,
  href,
}) {
  const base = `focus:outline-hidden w-full flexCenter gap-1 rounded-md relative
   transition-all duration-300 font-bold cursor-pointer text-center
  ${(disabled || loading) && "cursor-not-allowed! border-main! bg-light/35! text-main!"}`;

  const styles = {
    primary: `bg-light text-secondary border-light border
      ${!disabled && !loading && "hover:bg-light/90 active:bg-light/90"}`,
    secondary: `bg-secondary text-light border-light border
    ${!disabled && !loading && "hover:bg-light hover:text-secondary hover:border-light"}`,
    delete: `bg-error text-light
      ${!disabled && !loading && "hover:bg-error/90"}`,
    danger: `bg-light text-error
      ${!disabled && !loading && "hover:bg-error hover:text-light"}`,
  };

  const combinedClassName = `${sizeStyles[size]} ${base} ${styles[variation]} ${Font}`;

  if (href)
    return (
      <motion.div className="w-full" {...motionProps}>
        <Link
          to={href}
          className={combinedClassName}
          title={AriaLabel}
          aria-label={AriaLabel}
          target={target}
          disabled={disabled || loading}
          replace={replace}
        >
          {children}
        </Link>
      </motion.div>
    );

  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={combinedClassName}
      aria-label={AriaLabel}
      title={AriaLabel}
      {...motionProps}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-secondary size-3 animate-bounce rounded-full [animation-delay:-0.3s]" />
          <div className="bg-secondary size-3 animate-bounce rounded-full [animation-delay:-0.15s]" />
          <div className="bg-secondary size-3 animate-bounce rounded-full" />
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}
