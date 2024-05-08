import { Grand_Hotel } from "next/font/google";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import NavItem from "@/components/Navigation/NavItem";

const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });

export default function PageHeader() {
  return (
    <header className="flex justify-between my-5 px-3 items-center pb-4 border-b-2 border-b-gray-300">
      <div className={`${grandHotel.className} antialiased`}>
        <span className="text-5xl">Noor Mahdi</span>
      </div>
      <nav className="">
        <ul className="min-w-[600px] flex justify-between">
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Work History</NavItem>
          <NavItem>Qualification</NavItem>
          <NavItem>Testimonials</NavItem>
        </ul>
      </nav>
      <a href="tel:+6421502973" className="flex flex-row p-1 items-center">
        <span>+64 (21) 502 973</span>
        <span className="bg-white rounded-full shadow-lg ml-2 p-2">
          <PhoneArrowUpRightIcon className="size-5" />
        </span>
      </a>
    </header>
  );
}
