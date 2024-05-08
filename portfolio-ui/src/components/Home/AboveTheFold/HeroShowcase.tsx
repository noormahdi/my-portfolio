import Image from "next/image";
import Badge from "./Badge";

export default function HeroShowcase() {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-between">
      <Image
        src="/profile.png"
        alt="Profile picture"
        height={700}
        width={700}
      />
      <div id="badges" className="flex flex-row xl:flex-col justify-around">
        <Badge weight="1" description="patent"/>
        <Badge weight="14" decoration="+" description="years of experience"/>
        <Badge weight="20" decoration="+" description="projects" />
      </div>
    </div>
  );
}
