import clsx from "clsx";
export default function Badge({
  weight,
  description,
  decoration,
}: {
  weight: string;
  description: string;
  decoration?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="relative">
        {/* bg-gradient-to-tr text-transparent from-red-500 via-green-500 to-blue-500 bg-clip-text inline-block */}
        <h3
          className={clsx("text-3xl md:text-6xl font-extrabold", {
            "pr-4": decoration,
          })}
        >
          {weight}
        </h3>
        <span className="absolute top-0 right-0 font-extrabold text-2xl">
          {decoration}
        </span>
      </div>
      <p className="pl-2">{description}</p>
    </div>
  );
}
