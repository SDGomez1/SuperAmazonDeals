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
            <p className={styles.textTitle}>Busca en MercadoLibre</p>
            <p className={styles.text}>
              Comprueba si el producto se vende más caro en MercadoLibre{" "}
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>4</p>
          </div>
          <div>
            <p className={styles.textTitle}>Calcula tus ganancias</p>
            <p className={styles.text}>
              Resta la comisión de MercadoLibre para calcular tus ganancias.
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>5</p>
          </div>
          <div>
            <p className={styles.textTitle}>Compra y espera</p>
            <p className={styles.text}>
              Adquiere el producto en Amazon y espera la entrega.
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <div>
            <p className={styles.number}>6</p>
          </div>
          <div>
            <p className={styles.textTitle}>Vende y aguarda</p>
            <p className={styles.text}>
              Pon el producto en venta en MercadoLibre y espera compradores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
