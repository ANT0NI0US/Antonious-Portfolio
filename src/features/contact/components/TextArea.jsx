import React from "react";

const TextArea = React.forwardRef(
  ({ placeholder, onChange, error, disabled }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={placeholder}
          className="block p-[3px] text-sm text-light"
        >
          {placeholder}
        </label>

        <textarea
          ref={ref}
          id={placeholder}
          rows={4}
          className={`input resize-none rounded-md border-[1px] border-orange focus:border`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />

        {error && <div className="pl-[5px] text-sm text-red-400">{error}</div>}
      </div>
    );
  },
);

export default TextArea;
