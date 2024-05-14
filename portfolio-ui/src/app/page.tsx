import Image from "next/image";
import { Grand_Hotel } from "next/font/google";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import PageHeader from "@/components/PageHeader";
import Greeting from "@/components/Home/AboveTheFold/Greeting";
import HeroShowcase from "@/components/Home/AboveTheFold/HeroShowcase";
import CallToAction from "@/components/Home/AboveTheFold/CallToAction";
import TechStack from "@/components/Home/About/TechStack";

const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex min-h-svh flex-col max-w-[1920px] mx-auto my-0">
        <section
          id="above-the-fold"
          className="flex flex-col min-h-[calc(100svh-80px)]"
        >
          <PageHeader />
          <div className="flex flex-col md:flex-row justify-between px-5 flex-grow">
            <div className="content-center basis-1/2 flex-grow">
              <div className="flex flex-col justify-around h-full">
                <Greeting />
                <CallToAction className="flex justify-evenly pb-3"/>
              </div>
            </div>
            <div className="md:content-end basis-1/2">
              <HeroShowcase />
            </div>
          </div>
        </section>
        <section className="h-screen w-full bg-black">
          <TechStack/>
        </section>
      </main>
    </>
  );
}
