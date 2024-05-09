import Logo from "@/components/Home/About/Logo";
import clsx from "clsx";

export default function TechStack() {
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
      LogoName: "Node.js + npm",
      Src: `${techStackLogosFolder}/Nodejs_logo.svg`,
    },
    // {
    //   LogoName: "Next.js",
    //   Src: `${techStackLogosFolder}/Nextjs_Logo.svg`,
    //   styles: "invert opacity-25 hover:opacity-100 w-40",
    // },
    {
      LogoName: "Sass CSS",
      Src: `${techStackLogosFolder}/Sass_Logo_Color.svg`,
    },
    {
      LogoName: "Dockers and containerization",
      Src: `${techStackLogosFolder}/docker-mark-blue.svg`,
    },
  ];
  return (
    <ul className="flex flex-row flex-wrap justify-around mt-3 w-full">
      {techStack.map((ts, index) => {
        return (
          <li key={index} className="pb-5 mx-2">
            <Logo
              className={clsx(
                "h-[50px] md:h-[65px] w-full grayscale hover:grayscale-0",
                ts.styles
              )}
              width={150}
              height={70}
              src={ts.Src}
              hoverText={ts.LogoName}
            />
          </li>
        );
      })}
    </ul>
  );
}
