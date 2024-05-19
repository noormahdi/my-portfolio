import PageHeader from "@/components/PageHeader";
import Greeting from "./Greeting";
import CallToAction from "./CallToAction";
import HeroShowcase from "./HeroShowcase";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { LogInOut } from "@/components/Auth/AuthLinks";

export default function AboveTheFold() {
  return (
    <section
      id="above-the-fold"
      className="flex flex-col min-h-[calc(100svh-80px)]"
    >
      <div className="flex justify-between items-center space-x-2 pr-2 bg-black bg-opacity-5">
        <a href="tel:+6421502973" className="flex flex-row p-1 items-center">
          <span className="text-sm min-w-[140px] ml-2 md:p-1">
            <span className="hidden md:inline-block">Mobile</span>{" "}
            <PhoneArrowUpRightIcon className="size-3 inline-block mr-1" />
            +64 (21) 502 973
          </span>
        </a>
        <LogInOut />
      </div>
      <PageHeader />
      <div className="flex flex-col md:flex-row justify-between px-5 flex-grow">
        <div className="content-center basis-1/2 flex-grow">
          <div className="flex flex-col justify-around h-full">
            <Greeting />
            <CallToAction className="flex justify-evenly pb-3" />
          </div>
        </div>
        <div className="md:content-end basis-1/2">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}
