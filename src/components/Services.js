// components/Services.js
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <h2 id="services-heading">I Nostri Servizi</h2>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <h3>Marketing Digitale</h3>
          <p>Campagne mirate per aumentare lead e coinvolgimento.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Growth Hacking</h3>
          <p>Strategie rapide e iterative per scalare il tuo business.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>AI & Data Strategy</h3>
          <p>Utilizzo di AI e analisi dati per un vantaggio competitivo.</p>
        </div>
      </div>
    </section>
  );
}
