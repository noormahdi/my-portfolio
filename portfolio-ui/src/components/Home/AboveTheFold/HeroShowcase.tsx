import Image from "next/image";
import Badge from "./Badge";

export default function HeroShowcase() {
  return (
    <div className="flex flex-col-reverse 2xl:flex-row justify-between h-full">
      <div className="basis-4/5 content-end">
        <Image        
          layout="intrinsic"
          src="/profile.png"
          alt="Profile picture"
          height={700}
          width={700}
        />
      </div>
      <div className="flex flex-row 2xl:flex-col justify-around flex-wrap basis-1/5 pt-5">
        <Badge weight="1" description="patent" />
        <Badge weight="14" decoration="+" description="years of experience" />
        <Badge weight="20" decoration="+" description="projects" />
      </div>
    </div>
  );
}
