import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Logoticker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import ProductShowCase from "@/components/product-showcase";

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <Logoticker />
      <ProductShowCase />
    </main>
  );
}
