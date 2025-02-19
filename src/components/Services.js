// components/Services.js
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <h2 id="services-heading">I Nostri Servizi</h2>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <h3>Sviluppo di prodotti digitali</h3>
          <p>Creazione di siti web, applicazioni e piattaforme scalabili.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Digital Marketing & Growth Hacking</h3>
          <p>Strategie rapide e iterative per scalare il tuo business.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>IT consulting & automazione</h3>
          <p>Ottimizzazione dei processi aziendali e soluzioni di automazione.</p>
        </div>
        <div className={styles.serviceItem}>
          <h4>Business Development & Sales strategy</h4>
          <p>Strutturazione di processi di vendita scalabili</p>
        </div>
      </div>
    </section>
  );
}
