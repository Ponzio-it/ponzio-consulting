import styles from '../styles/Home.module.css';

export default function OurWayOfWork() {
  return (
    <section id="our-way-of-work" className={styles.ourWayOfWork} aria-labelledby="our-way-heading">
      <h2 id="our-way-heading">Come Lavoriamo</h2>
      <p>
        Uniamo visione strategica, governance dei dati e agilità operativa. Ogni intervento è guidato da dati, normato da policy, 
        orientato alla crescita.
      </p>

      <div className={styles.workProcess}>
        <div className={styles.processStep}>
          <h3>🔍 Analisi del contesto</h3>
          <p>
            <strong>Call gratuita</strong> per comprendere sfide e priorità. Identifichiamo criticità e opportunità.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>📋 Strategia &amp; Governance dei dati</h3>
          <p>
            <strong>Roadmap su misura</strong> con KPI, governance e adeguamento normativo.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>🚀 Esecuzione Agile</h3>
          <p>
            Sprint brevi, <strong>miglioramento continuo</strong> e adattamento costante.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>🔄 Ottimizzazione continua</h3>
          <p>
            Monitoraggio, feedback e <strong>ottimizzazione data-driven.</strong>
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.ctaButton}>Richiedi consulenza personalizzata</a>
        </div>
      </div>
    </section>
  );
}
