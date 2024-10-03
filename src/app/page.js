import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
// import { BackgroundBeamsDemo } from "./_components/BackgroundBeamsDemo";

export default function Home() {
  return (
    <div>
      {/* <BackgroundBeamsDemo></BackgroundBeamsDemo> */}
      <Header></Header>
      <Hero></Hero>
      
    </div>
  );
}
