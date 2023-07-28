import Image from "next/image";
import styles from "@/styles/components/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.main}>
      <Image src="/Logo AmazonDeals.svg" alt="Logo" width={83} height={61} />
      <div className={styles.linksContainer}>
        <a id={styles.one}>Como Funciona</a>
        <a id={styles.two}>Descubre</a>
      </div>
    </div>
  );
};
