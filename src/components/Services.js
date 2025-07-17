import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesContainer}>
        <h2 id="services-heading">IL Nostro Servizio</h2>
        <p className={styles.servicesDescription}>
          Supportiamo PMI e startup a diventare data-driven, strutturando dati, processi e conformità attraverso servizi modulari, scalabili e orientati ai risultati.
        </p>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>📊 Valutazione prontezza AI e analisi dei gap</h3>
            <p>
              Valuta se la tua azienda è pronta ad adottare l&apos;Intelligenza Artificiale in modo sicuro, strategico e conforme all&apos;AI Act.
              Esploriamo i casi d&apos;uso, la qualità dei dati, i rischi e il livello di consapevolezza interna.
              Ti aiutiamo a capire dove sei e cosa serve per integrare l&apos;AI in modo efficace, responsabile e a prova di normativa.
            </p>
          </div>

          
          
        </div>
        <div className={styles.servicesContainer}></div>
          <h2 id="services-heading">Unico Prezzo, Tutto incluso</h2>
          <div className={styles.offerGrid}></div>
            <div className={styles.offerCard}>
              <h3>🧭 Una fotografia chiara della situazione attuale</h3>
            </div>
            <div className={styles.offerCard}>
              <h3>🚨 L&apos;elenco dei punti critici da sistemare</h3>
          </div>
          <div className={styles.offerCard}>
              <h3>✅ Una guida pratica per mettersi in regola e proteggere il business</h3>
          </div>
          <div className={styles.offerCard}>
              <h3>🚀 I rischi da evitare e le opportunità da cogliere</h3>
          </div>
          <div className={styles.offerCard}>
              <h3>🛡️ Una base solida per investire in AI in modo strutturato e responsabile</h3>
          </div>
          <div className={styles.offerBanner}>
             
              <img 
                src="/images/prezzo.png" 
                alt="Offerta: AI Assessment più Privacy assesment 1995€" 
                className={styles.offerImage}
              />
          </div>
          
      </div>
    </section>
  );
}

