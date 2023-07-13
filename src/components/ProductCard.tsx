import Image from 'next/image'

import styles from '@/styles/ProductCard.module.css'
export const ProductCard = () => {
    return (
        <div className={styles.container}>
            <Image src= '' alt= '' width = {135} height = {135}/>
            <h3> AMD</h3>
            <p>Processor</p>
            <p> $150.99</p>
            <img src='/Star.svg'></img>
            <button>Comprar en Amazon</button>
        </div>
    )
}               