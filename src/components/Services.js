// components/Services.js
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
    <h2 id="services-heading">Strutturiamo la crescita del tuo business</h2>
    <div className={styles.serviceList}>
      
      <div className={styles.serviceItem}>
        <h3>Prodotti digitali scalabili</h3>
        <p>Dall&apos;idea alla crescita: sviluppiamo web app, piattaforme e soluzioni digitali con un approccio iterativo, misurabile e orientato ai dati.</p>
      </div>
      
      <div className={styles.serviceItem}>
        <h3>Marketing Data-Driven</h3>
        <p>Progettiamo strategie di digital marketing e growth hacking basate su KPI, eliminando sprechi e massimizzando il ROI.</p>
      </div>
      
      <div className={styles.serviceItem}>
        <h3>IT Consulting & Automazione</h3>
        <p>Digitalizziamo e automatizziamo processi aziendali per ridurre inefficienze, migliorare la produttività e scalare senza ostacoli.</p>
      </div>
      
      <div className={styles.serviceItem}>
        <h3>Business Development & Sales</h3>
        <p>Strutturiamo funnel di vendita scalabili e prevedibili, trasformando lead in clienti e ottimizzando i processi di conversione.</p>
      </div>
  
    </div>
  </section>
  )
}
