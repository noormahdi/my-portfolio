import Image from "next/image";
import { Grand_Hotel } from "next/font/google";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import PageHeader from "@/components/PageHeader";
import Greeting from "@/components/Home/AboveTheFold/Greeting";
import HeroShowcase from "@/components/Home/AboveTheFold/HeroShowcase";
import CallToAction from "@/components/Home/AboveTheFold/CallToAction";
import AboveTheFold from "@/components/Home/AboveTheFold/AboveTheFold";
import About from "@/components/Home/About";

const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex min-h-svh flex-col max-w-[1920px] mx-auto my-0">
        <AboveTheFold/>
        <About/>
      </main>
    </>
  );
}
