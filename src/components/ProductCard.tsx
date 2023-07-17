import Image from "next/image";

import styles from "@/styles/ProductCard.module.css";
import { StarSvg } from "./StarSvg";
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
      <Image src={props.imgUrl} alt={props.imgAlt} width={135} height={135} />
      <h3> {props.name}</h3>
      <p>{props.description}</p>
      <p id={styles.price}> ${props.price}</p>
      <div className={styles.starContainer}>
        <StarSvg numberofStars={props.stars} />
      </div>
      <div className={styles.spacing}>
        <a href={props.link} target="__blank">
          Comprar en Amazon
        </a>
      </div>
    </div>
  );
};
