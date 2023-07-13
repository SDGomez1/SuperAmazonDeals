import Image from 'next/image'
import styles from './page.module.css'
import { ProductCard } from '@/components/ProductCard'

export default function Home() {
  return (
    <main className={styles.main}>
       <nav className={styles.nav}>
          <Image
          src="/Logo AmazonDeals.svg"
          alt='Logo'
          width={146}
          height={109}>
          </Image>
       </nav>
       <section className={styles.productsContainer}>
        <h2>
          Encuentra las mejores ofertas de Amazon
        </h2>
        <ProductCard/>
       </section>
    </main>
  )
}
