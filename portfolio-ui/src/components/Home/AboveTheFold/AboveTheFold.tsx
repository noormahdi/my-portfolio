import PageHeader from "@/components/PageHeader";
import Greeting from "./Greeting";
import CallToAction from "./CallToAction";
import HeroShowcase from "./HeroShowcase";

export default function AboveTheFold(){
    return(
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
    );
}