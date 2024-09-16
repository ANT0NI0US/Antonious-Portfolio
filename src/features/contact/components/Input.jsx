import React from "react";

const Input = React.forwardRef(
  ({ type = "text", placeholder, onChange, error, disabled, Icon }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={placeholder}
          className="block p-[3px] text-sm text-light"
        >
          {placeholder}
        </label>

        <div
          className={`z-10 flex w-full items-center rounded-md border-[1px] border-orange bg-main transition-all ${Icon ? "relative" : ""}`}
        >
          <input
            disabled={disabled}
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`input rounded-bl-md rounded-tl-md`}
            id={placeholder}
            onChange={onChange}
          />

          {Icon && (
            <div className="flexCenter h-[44px] w-[40px] text-orange">
              {Icon}
            </div>
          )}
        </div>

        {error && (
          <div className="mt-[3px] pl-[5px] text-sm text-red-400">{error}</div>
        )}
      </div>
    );
  },
);

export default Input;
