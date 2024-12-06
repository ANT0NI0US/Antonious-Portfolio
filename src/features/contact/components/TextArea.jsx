export default function TextArea({ placeholder, error, disabled, field }) {
  return (
    <div className="w-full">
      <label htmlFor={placeholder} className="block p-[3px] text-sm text-light">
        {placeholder}
      </label>

      <textarea
        id={placeholder}
        rows={4}
        className={`input resize-none rounded-md border-[1px] border-orange focus:border`}
        placeholder={placeholder}
        disabled={disabled}
        {...(field ? field : {})}
      />

      {error && <div className="pl-[5px] text-sm text-red-400">{error}</div>}
    </div>
  );
}
