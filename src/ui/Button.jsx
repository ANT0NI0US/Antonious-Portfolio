export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  Font,
  disabled,
  loading,
  ArialLabel,
}) {
  const base = `focus:outline-none w-full rounded-md border relative 
   transition-all duration-[800ms] h-[45px] font-bold ${Font}
  ${(disabled || loading) && "cursor-not-allowed !border-main !bg-light/35 !text-main"}`;

  const styles = {
    primary:
      base +
      ` bg-secondary text-primary border-orange 
      ${!disabled && !loading && "hover:bg-[#61435e]"}`,
    secondary:
      base +
      ` bg-main text-orange border-orange
    ${!disabled && !loading && "hover:bg-secondary/50 hover:text-primary hover:border-primary"}`,
    delete:
      base +
      ` bg-[#2e7d32] text-light-color border-darkB 
      ${!disabled && !loading && "hover:bg-[#1b5e20]"}`,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={styles[variation]}
      aria-label={ArialLabel}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-primary-color-light h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
          <div className="bg-primary-color-light h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
          <div className="bg-primary-color-light h-3 w-3 animate-bounce rounded-full"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
