import clsx from "clsx";
import Image from "next/image";

export default function About() {
  return (
    <section className="h-screen w-full bg-black pt-2">
      <div className="techstack-header">
        <TechStack />
      </div>
    </section>
  );
}

function TechStack() {
  const techStackLogosFolder = "/tech-logos";
  type TechStackLogo = { LogoName: string; Src: string; styles?: string };
  const techStack: TechStackLogo[] = [
    {
      LogoName: "Microsoft Azure",
      Src: `${techStackLogosFolder}/Microsoft_Azure.svg`,
    },
    {
      LogoName: "C#",
      Src: `${techStackLogosFolder}/C_Sharp_Logo_2023.svg`,
    },
    {
      LogoName: "Backend using .Net stack such as DotNet Core",
      Src: `${techStackLogosFolder}/NET_Core_Logo.svg`,
    },
    {
      LogoName: "Frontend JavaScript frameworks",
      Src: `${techStackLogosFolder}/Angular_React_Vue_Logo.svg`,
    },
    {
      LogoName: "Databases",
      Src: `${techStackLogosFolder}/AzureSQLDatabase.svg`,
    },
    {
      LogoName: "IaC",
      Src: `${techStackLogosFolder}/Bicep_Logo.svg`,
    },
    {
      LogoName: "Dockers and containerization",
      Src: `${techStackLogosFolder}/docker-mark-blue.svg`,
    },
  ];
  return (
    <ul className="flex flex-row flex-wrap justify-around w-full">
      {techStack.map((ts, index) => {
        return (
          <li key={index} className="pb-5 mx-2">
            <Logo
              className={clsx(
                "h-[25px] md:h-[40px] w-full grayscale hover:grayscale-0",
                ts.styles
              )}
              width={150}
              height={70}
              src={ts.Src}
              alt={ts.LogoName}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Logo({
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
