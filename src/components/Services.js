import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesContainer}>
        <h2 id="services-heading">Strutturiamo la crescita del tuo business</h2>
        <p className={styles.servicesDescription}>
          Ottimizziamo processi, strategie di crescita e digitalizzazione per garantire scalabilità e risultati misurabili. 
          Il nostro approccio è basato su dati, automazione e metodologie agili.
        </p>
        
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>🚀 Prodotti Digitali Scalabili</h3>
            <p>
              Dall&apos;idea alla crescita: sviluppiamo piattaforme, web app e soluzioni digitali con un approccio iterativo, 
              misurabile e orientato ai dati.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>📈 Marketing Data-Driven</h3>
            <p>
              Progettiamo strategie di digital marketing e growth hacking basate su KPI, eliminando sprechi e massimizzando il ROI.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🤖 IT Consulting & Automazione</h3>
            <p>
              Digitalizziamo e automatizziamo processi aziendali per ridurre inefficienze, migliorare la produttività 
              e scalare senza ostacoli.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>💰 Business Development & Sales</h3>
            <p>
              Strutturiamo funnel di vendita scalabili e prevedibili, trasformando lead in clienti e ottimizzando i processi di conversione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
