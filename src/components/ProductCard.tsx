import Image from "next/image";

import styles from "@/styles/components/ProductCard.module.css";
import { StarSvg } from "./svg/StarSvg";
export const ProductCard = (props: {
  name: string;
  description: string;
  price: number;
  stars: number;
  link: string;
  imgUrl: string;
  imgAlt: string;
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={props.imgUrl}
        alt={props.imgAlt}
        width={176}
        height={122}
        fill={false}
        style={{ objectFit: "contain" }}
      />
      <div className={styles.textContainer}>
        <h3> {props.name}</h3>
        <p>{props.description}</p>
        <div className={styles.priceContainer}>
          <div className={styles.priceTextContainer}>
            <p id={styles.prevPrice}>$130.99</p>
            <p id={styles.price}> ${props.price}</p>
            <p>20% de descuento </p>
          </div>
          <div className={styles.starContainer}>
            <StarSvg numberofStars={props.stars} />
          </div>
        </div>
      </div>
      <div className={styles.spacing}>
        <a href={props.link} target="__blank">
          Comprar en Amazon
        </a>
      </div>
    </div>
  );
};
