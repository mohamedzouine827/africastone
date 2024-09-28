import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import Product from "./_components/Product";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <HeroSection/>
      <Product/>
      <Footer/>
    </section>
  );
}
