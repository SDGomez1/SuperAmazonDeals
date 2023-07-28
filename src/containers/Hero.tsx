import { HeroIlustration } from "@/components/svg/HeroIllustration";
import styles from "@/styles/containers/Hero.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
export const Hero = () => {
  return (
    <section className={styles.main}>
      <div className={styles.textContainer}>
        <h1 style={raleway.style}>Encuentra las mejores ofertas de Amazon</h1>
        <p style={raleway.style}>
          No pierdas esta oportunidad de comprar barato y vender caro con
          facilidad
        </p>
        <button style={raleway.style}> Descubre los productos</button>
      </div>
      <div className={styles.figureContainer}>
        <HeroIlustration />
      </div>
    </section>
  );
};
