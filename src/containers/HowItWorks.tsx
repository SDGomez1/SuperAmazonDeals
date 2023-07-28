import styles from "@/styles/containers/HowItWorks.module.css";

export const HowitWorks = () => {
  return (
    <section className={styles.main}>
      <h3>¿Como funciona?</h3>
      <p> Encuentra las oportunidades en 6 simples pasos</p>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>1</p>
          </div>
          <div>
            <p className={styles.textTitle}>Busca Ofertas en Amazon</p>
            <p className={styles.text}>
              Encuentra productos con descuentos en Amazon en los productos que
              te mostramos.
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>2</p>
          </div>
          <div>
            <p className={styles.textTitle}>Verifica envíos a tu país</p>
            <p className={styles.text}>
              Asegúrate de que el producto se pueda enviar a tu país.
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>3</p>
          </div>
          <div>
            <p className={styles.textTitle}>Verifica envíos a tu país</p>
            <p className={styles.text}>
              Asegúrate de que el producto se pueda enviar a tu país.
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>4</p>
          </div>
          <div>
            <p className={styles.textTitle}>Verifica envíos a tu país</p>
            <p className={styles.text}>
              Asegúrate de que el producto se pueda enviar a tu país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
