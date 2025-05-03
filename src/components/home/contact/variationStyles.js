export const normalError = "!border-error focus-within:!border-error";

export const VARIATION_STYLES = {
  input: "h-full peer appearance-none",
  error: `border-[3px] ${normalError}`,
  default:
    "border-[3px] h-[60px] border-secondary focus-within:border-primary active:border-primary",
  label:
    "peer-placeholder-shown:bg-transparent peer-focus:bg-main peer-focus:light text-light absolute top-[12px] -translate-y-7 transform px-1 duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:px-2.5 left-[10px] peer-[&:not(:placeholder-shown)]:bg-main",
};
