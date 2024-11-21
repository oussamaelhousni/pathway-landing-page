import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Logoticker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import ProductShowCase from "@/components/product-showcase";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <Logoticker />
      <ProductShowCase />
      <Pricing />
      <Testimonials />
    </main>
  );
}
