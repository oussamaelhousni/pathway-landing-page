import Banner from "@/components/banner";
import CallToAction from "@/components/call-to-action";
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
      <CallToAction />
    </main>
  );
}
