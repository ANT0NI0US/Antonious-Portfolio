import { Link } from "react-router-dom";

const sizeStyles = {
  small: "px-2 py-1 text-xs sm:text-sm",
  medium: "px-3 py-2 text-sm sm:text-base",
  large: "px-4 py-3 text-lg sm:text-xl",
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
  const isDisabled = disabled || loading;

  const base = `focus:outline-hidden w-full flexCenter gap-1 rounded-md relative
   transition-all duration-300 font-bold cursor-pointer text-center
  ${(disabled || loading) && "cursor-not-allowed! border-main! bg-light/35! text-main!"}`;

  const styles = {
    primary: `bg-primary text-secondary border-primary border
      ${!disabled && !loading && "hover:bg-primary/95 active:bg-primary/95"}`,
    secondary: `bg-transparent text-light border-primary border
    ${!disabled && !loading && "hover:bg-primary hover:text-secondary hover:border-primary"}`,
    delete: `bg-error text-light
      ${!disabled && !loading && "hover:bg-error/90"}`,
    danger: `bg-light text-error
      ${!disabled && !loading && "hover:bg-error hover:text-light"}`,
  };

  const combinedClassName = `${sizeStyles[size]} ${base} ${styles[variation]} ${Font}`;

  if (href)
    return (
      <div className="w-full">
        <Link
          to={href}
          className={combinedClassName}
          title={AriaLabel}
          aria-label={AriaLabel}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          replace={replace}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {children}
        </Link>
      </div>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={combinedClassName}
      aria-label={AriaLabel}
      title={AriaLabel}
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
    </button>
  );
}
