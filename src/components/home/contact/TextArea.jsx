import { VARIATION_STYLES } from "./variationStyles";

export default function TextArea({ placeholder, error, disabled, field }) {
  const errorStyles = error ? VARIATION_STYLES.error : VARIATION_STYLES.default;
  return (
    <div className="relative w-full">
      <textarea
        id={placeholder}
        placeholder=" "
        rows={6}
        className={`input bg-main resize-none rounded-md ${disabled ? "placeholder:text-light/70" : ""} ${
          VARIATION_STYLES.input
        } ${errorStyles}`}
        disabled={disabled}
        {...(field ? field : {})}
      />

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

      {error && <div className="text-error pl-[5px] text-sm">{error}</div>}
    </div>
  );
}
