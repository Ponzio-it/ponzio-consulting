import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesContainer}>
        <h2 id="services-heading">La tua Intelligence per una crescita strutturata</h2>
        <p className={styles.servicesDescription}>
          Gestiamo informazioni strategiche, processi e sicurezza per guidare decisioni aziendali basate su dati concreti, compliance GDPR e cybersicurezza avanzata.
        </p>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>📊 Dashboard di Business Intelligence</h3>
            <p>
              Creiamo dashboard su misura che trasformano dati complessi in informazioni chiare e immediatamente utilizzabili per decisioni strategiche.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🔒 GDPR & Sicurezza Informatica</h3>
            <p>
              Realizziamo progetti ad hoc garantendo conformità GDPR e alti standard di cybersicurezza per proteggere il tuo business.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>📁 Gestione Strategica del Flusso Informativo</h3>
            <p>
              Ottimizziamo il flusso delle informazioni aziendali per migliorare processi decisionali, riducendo complessità e rischi operativi.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🛠️ Progetti Personalizzati e Scalabili</h3>
            <p>
              Ogni soluzione è personalizzata sulle tue esigenze specifiche, progettata per adattarsi e crescere insieme al tuo business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}