// components/Services.js
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <h2 id="services-heading">Soluzioni per scalare senza caos</h2>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <h3>Prodotti digitali scalabili</h3>
          <p>Dall&apos;idea alla crescita: sviluppiamo web app, piattaforme e soluzioni digitali con un approccio iterativo e data-driven.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Marketing Digitale & Crescita misurabile</h3>
          <p>Strutturiamo strategie di digital marketing e growth hacking basate su dati e KPI, eliminando azioni casuali e ottimizzando i risultati.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>IT Consulting & Automazione</h3>
          <p>Implementiamo sistemi automatizzati e ottimizziamo i processi aziendali per ridurre inefficienze e migliorare la scalabilità.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Business Development & Sales Strategy</h3>
          <p>Costruiamo processi di vendita scalabili e prevedibili, riducendo l&apos;incertezza e migliorando la conversione clienti.</p>
        </div>
      </div>
    </section>
  );
}