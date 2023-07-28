import styles from "./page.module.css";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/containers/Hero";
import { HowitWorks } from "@/containers/HowItWorks";
import { ProductsSection } from "@/containers/ProductsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <HowitWorks />
      <ProductsSection />
    </main>
  );
}
