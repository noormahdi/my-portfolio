export default function Greeting() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl md:py-5 text-center">
        👋 <span lang="mi">Kia Ora</span>, <span className="font-extrabold bg-blue-200 rounded-lg px-1">I&apos;m Noor</span>
      </h1>
      <h2 className="text-2xl md:text-4xl py-5 text-center">
        Welcome to my digital playground!
      </h2>
      <p className="text-sm md:text-lg md:leading-8 text-justify pb-5">
        I&apos;m <span className="bg-blue-200 rounded-lg p-1">a passionate full-stack developer</span> on a mission to craft
        immersive digital experiences. <span className="hidden md:inline">With a blend of creativity and technical
        expertise, I thrive on turning ideas into elegant, functional realities.</span> Explore my portfolio and join me on a journey where innovation meets
        seamless user experiences.
      </p>
    </div>
  );
}
