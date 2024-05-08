import Image from "next/image";
import { Grand_Hotel } from "next/font/google";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import PageHeader from "@/components/PageHeader";
import Greeting from "@/components/Home/AboveTheFold/Greeting";
import HeroShowcase from "@/components/Home/AboveTheFold/HeroShowcase";

const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col max-w-[1920px] mx-auto my-0">
        <section
          id="above-the-fold"
          className="flex flex-col h-[calc(100vh-100px)]"
        >
          <PageHeader />
          <div className="flex flex-col md:flex-row justify-between px-5 h-full">
            <div className="content-center md:w-1/2 shrink">
              <Greeting />
            </div>
            <div className="md:w-1/2 md:content-end">
              <HeroShowcase />
            </div>
          </div>
        </section>
        <section className="h-screen w-full bg-black"></section>
      </main>
    </>
  );
}
