import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesContainer}>
        <h2 id="services-heading">IL Nostro Servizio</h2>
        <p className={styles.servicesDescription}>
          Ti aiutiamo a mettere ordine nei processi, rispettare le normative (GDPR, ISO 27001, AI Act) 
          e costruire una roadmap di digitalizzazione sicura e sostenibile.
        </p>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>📊 Valutazione prontezza AI e analisi dei gap</h3>
            <p>
              Valuta la prontezza della tua azienda nell&apos;adottare l&apos;Intelligenza Artificiale
              in modo sicuro e conforme alle normative <strong>(GDPR, ISO 27001, AI Act)</strong>,
              analizzando casi d&apos;uso, qualità dei dati, rischi e livello di consapevolezza interna.
            </p>
          </div>

          
          
        </div>
        
          
      </div>
    </section>
  );
}

