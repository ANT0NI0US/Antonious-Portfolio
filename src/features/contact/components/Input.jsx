import { VARIATION_STYLES } from "./variationStyles";

export default function Input({ placeholder, error, disabled, Icon, field }) {
  const errorStyles = error ? VARIATION_STYLES.error : VARIATION_STYLES.default;
  return (
    <div className="w-full">
      <div
        className={`bg-main relative z-10 flex items-center rounded-md transition-all duration-300 ${errorStyles}`}
      >
        <input
          id={placeholder}
          type="text"
          placeholder=" "
          className={`input ${disabled ? "placeholder:text-light border-none" : ""} ${
            VARIATION_STYLES.input
          }`}
          disabled={disabled}
          {...(field ? field : {})}
        />

        {Icon && (
          <div
            className={`flexCenter text-primary h-[44px] w-[40px] rounded-tr-[4px] rounded-br-[4px] ${
              disabled ? "cursor-not-allowed" : ""
            }`}
          >
            {Icon}
          </div>
        )}

        <label
          htmlFor={placeholder}
          className={`${
            disabled
              ? "peer-placeholder-shown:text-light/70 cursor-not-allowed"
              : "peer-placeholder-shown:text-light"
          } ${VARIATION_STYLES.label}`}
        >
          {placeholder} {error && <span className="text-error"> *</span>}
        </label>
      </div>

      {error && (
        <div className="text-error mt-[3px] pl-[5px] text-sm">{error}</div>
      )}
    </div>
  );
}
