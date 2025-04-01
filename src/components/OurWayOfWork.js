import styles from '../styles/Home.module.css';

export default function OurWayOfWork() {
  return (
    <section id="our-way-of-work" className={styles.ourWayOfWork} aria-labelledby="our-way-heading">
      <h2 id="our-way-heading">Come Lavoriamo</h2>
      <p>
        Siamo l'intelligence dei CEO di startup e PMI: trasformiamo dati e informazioni complesse in decisioni strategiche chiare e misurabili.
        Il nostro metodo si basa su una gestione strutturata del flusso informativo, compliance GDPR e sicurezza informatica.
      </p>

      <div className={styles.workProcess}>
        <div className={styles.processStep}>
          <h3>🔍 Analisi Strategica Iniziale</h3>
          <p>
            Partiamo con una <strong>chiamata gratuita</strong> per identificare le esigenze specifiche e i dati rilevanti del tuo business.
            Strutturiamo informazioni e KPI strategici per definire le soluzioni più efficaci.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>📋 Dashboard Personalizzate</h3>
          <p>
            Progettiamo dashboard di <strong>Business Intelligence</strong> completamente personalizzate sulle tue esigenze.
            Ogni dashboard è disegnata per rendere semplici decisioni complesse grazie a informazioni chiare, tempestive e pertinenti.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>🚀 Progetto Personalizzato GDPR & Cybersecurity</h3>
          <p>
            Realizziamo soluzioni ad hoc tenendo sempre presente la conformità GDPR e la cybersicurezza.
            Ogni progetto è su misura, garantendo compliance normativa e sicurezza dei dati aziendali.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>🔄 Monitoraggio e Ottimizzazione Continua</h3>
          <p>
            Gestiamo continuamente i flussi informativi e i KPI per adattare rapidamente la strategia aziendale.
            Il nostro lavoro non si ferma mai: continuiamo a monitorare, adattare e migliorare per supportare la crescita costante del tuo business.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza Gratuita</a>
        </div>
      </div>
    </section>
  );
}
