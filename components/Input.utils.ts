export const inputClasses = [
  "peer",
  "appearance-none",
  "transition-border",
  "duration-200",
  "ease-in-out",
  "min-w-[210px]",
  "w-full",

  "outline-none",
  "px-4",
  "h-12",
  "border-[1px]",
  "border-gray-400",
  "rounded-lg",
  "placeholder-shown:text-gray-300",
  "hover:border-night-violet-lighter-200",

  "focus-within:shadow-[0_0_0_1px_#60378B]",

  "data-[invalid=true]:focus-within:shadow-none",
  "data-[invalid=true]:border-error",
  "data-[invalid=true]:text-error",

  "data-[disabled=true]:pointer-events-none",
  "data-[disabled=true]:text-gray-300",
  "data-[disabled=true]:bg-gray-500",
  "data-[disabled=true]:border-gray-400",
];

export const labelClasses = [
  "transition-color",
  "duration-200",
  "ease-in-out",
  "rounded-full",
  "h-4",
  "text-gray-200",
  "absolute",
  "-top-[6px]",
  "left-[10px]",
  "px-2",
  "text-[12px]",
  "flex",
  "items-center",
  "bg-white",
  "pointer-events-none",

  "peer-hover:text-night-violet-lighter-200",

  "data-[invalid=true]:text-error",
  "data-[invalid=true]:peer-hover:text-error",

  "data-[disabled=true]:pointer-events-none",
  "data-[disabled=true]:text-gray-300",
];

export const helperTextClasses = [
  "px-4",
  "text-left",
  "text-gray-200",
  "text-xs",
  "font-normal",
  "pt-1",
  "data-[invalid=true]:text-error",
  "data-[disabled=true]:text-gray-200",
];
