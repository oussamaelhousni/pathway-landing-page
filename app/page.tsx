import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Logoticker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <Logoticker />
    </main>
  );
}
