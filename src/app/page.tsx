import Image from "next/image";
import styles from "./page.module.css";
import { ProductCard } from "@/components/ProductCard";
import { Products } from "@/data/products";
export default function Home() {
  const products = Products.map((currentProduct) => {
    return (
      <ProductCard
        key={currentProduct.id}
        name={currentProduct.name}
        description={currentProduct.description}
        price={currentProduct.price}
        stars={currentProduct.stars}
        link={currentProduct.link}
        imgUrl={currentProduct.imgUrl}
        imgAlt={currentProduct.imgALt}
      />
    );
  });

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Image
          src="/Logo AmazonDeals.svg"
          alt="Logo"
          width={146}
          height={109}
        ></Image>
      </nav>
      <section className={styles.productsContainer}>
        <h2>Encuentra las mejores ofertas de Amazon</h2>
        <div>{products}</div>
      </section>
    </main>
  );
}
