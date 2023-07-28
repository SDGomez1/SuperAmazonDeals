import styles from "@/styles/containers/ProductsSection.module.css";

import { ProductCard } from "@/components/ProductCard";
import { Products } from "@/data/products";

export const ProductsSection = () => {
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
        prevPrice={currentProduct.prevPrice}
        discount={currentProduct.discount}
      />
    );
  });
  return (
    <section className={styles.main}>
      <div className={styles.textContainer}>
        <h2 id="Products">Productos Exclusivos</h2>
        <p>Explora los productos de Amazon con los mejores descuentos</p>
      </div>
      <div className={styles.productContainer}>{products}</div>
    </section>
  );
};
