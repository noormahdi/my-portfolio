import Image from "next/image";
import clsx from "clsx";

export default function Logo({
  height,
  width,
  src,
  hoverText,
  className,
}: {
  height: number;
  width: number;
  src: string;
  hoverText?: string;
  className?: string;
}) {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={hoverText ?? "Logo"}
      className={clsx("", className)}
    />
  );
}
