export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  Font,
  disabled,
  loading,
  AriaLabel,
  href,
}) {
  const base = `focus:outline-none w-full flexCenter gap-1 rounded-md border relative 
   transition-all duration-[800ms] h-[45px] font-bold
  ${(disabled || loading) && "cursor-not-allowed !border-main !bg-light/35 !text-main"}`;

  const styles = {
    primary: `bg-secondary text-primary border-orange 
      ${!disabled && !loading && "hover:bg-[#61435e]"}`,
    secondary: `bg-main text-orange border-orange
    ${!disabled && !loading && "hover:bg-secondary/50 hover:text-primary hover:border-primary"}`,
    delete: `bg-[#2e7d32] text-light-color border-darkB 
      ${!disabled && !loading && "hover:bg-[#1b5e20]"}`,
  };

  if (href)
    return (
      <a
        href={href}
        className={`${base} ${styles[variation]} ${Font}`}
        title={AriaLabel}
        aria-label={AriaLabel}
        disabled={disabled || loading}
      >
        {children}
      </a>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${base} ${styles[variation]} ${Font}`}
      aria-label={AriaLabel}
      title={AriaLabel}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="h-3 w-3 animate-bounce rounded-full bg-secondary [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-secondary [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-secondary"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
