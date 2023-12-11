export default function Button({
  href,
  className,
  variant,
  children,
  notpill,
}) {
  const addClassName = className ? `${className}` : "";
  const varians = {
    "outline-yellow":
      "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition ease-in-out delay-150 hover:cursor-pointer",
    "fullfilled-yellow":
      "bg-yellow-500 text-white hover:bg-transparent hover:bg-white hover:text-yellow-500 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration:300 hover:cursor-pointer",
    "fullfilled-black":
      "bg-black text-white hover:bg-opacity-70 hover:cursor-pointer",
  };
  const pickedVariant = varians[variant];

  return (
    <a
      href={href}
      className={`text-sm px-10 py-3 inline-block ${
        !notpill ? "rounded-full" : ""
      } ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
