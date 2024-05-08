import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  category?: "Primary" | "Secondary";
}

export function Button({
  children,
  className,
  category,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-xl px-4 text-sm font-medium transition-colors",
        { "bg-red-200 duration-300 hover:bg-blue-200": category == "Primary" },
        {"border border-blue-200 hover:border-red-200": category == "Secondary"},
        className
      )}
    >
      {children}
    </button>
  );
}
