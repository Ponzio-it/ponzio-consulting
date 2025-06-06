import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesContainer}>
        <h2 id="services-heading">I Nostri Servizi</h2>
        <p className={styles.servicesDescription}>
          Supportiamo PMI e startup nell&apos;adottare un approccio data-driven, strutturando dati, processi e compliance 
          con servizi modulari, scalabili e orientati al risultato.
        </p>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>📊 Data Assessment</h3>
            <p>
              Mappiamo flussi e strumenti per una governance dei dati efficace.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🔐 Privacy &amp; GDPR Assessment</h3>
            <p>
              Verifica e adeguamento rapido alla normativa.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🛡️ Cybersecurity Assessment</h3>
            <p>
              Analisi e azioni prioritarie secondo ISO 27001.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🤖 AI &amp; Automation Assessment</h3>
            <p>
              Valutazione e adozione responsabile, in linea con l'AI Act.
            </p>
          </div>
            <div className={styles.serviceCard}>
            <h3>📈 KPI &amp; Data Strategy</h3>
            <p>
              Framework decisionali basati su KPI chiari.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>📁 Pacchetto Audit &amp; Roadmap</h3>
            <p>
              Assessment normativo + piano operativo (GDPR, ISO, AI Act).
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>🧭 Fractional CDO</h3>
            <p>
              Guida strategica sui dati, senza costi fissi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

