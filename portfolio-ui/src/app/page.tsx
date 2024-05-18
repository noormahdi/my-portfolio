import AboveTheFold from "@/components/Home/AboveTheFold/AboveTheFold";
import About from "@/components/Home/About";

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
