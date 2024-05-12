import Image from "next/image";
import clsx from "clsx";

export default function Logo({
  height,
  width,
  src,
  alt,
  className,
}: {
  height: number;
  width: number;
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt ?? "Logo"}
      className={clsx("", className)}
    />
  );
}
