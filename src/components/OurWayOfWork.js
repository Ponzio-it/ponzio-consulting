import styles from '../styles/Home.module.css';
export default function OurWayOfWork() {
  return (
    <section id="our-way-of-work" className={styles.ourWayOfWork} aria-labelledby="our-way-heading">
      <h2 id="our-way-heading">Come Eseguiamo l&apos;analisi</h2>
      <p>
        Analizziamo i tuoi processi con metodo, valutiamo i rischi di compliance
        e definiamo una roadmap operativa per accompagnare la digitalizzazione in sicurezza.
      </p>

      <div className={styles.workProcess}>
        <div className={styles.processStep}>
          <h3>1️⃣ Consulenza introduttiva gratuita</h3>
          <p>
            <strong>Call gratuita</strong> per comprendere sfide e priorità. Identifichiamo criticità e opportunità.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>2️⃣ Workshop di analisi in presenza</h3>
          <p>
            <strong>Due giornate</strong> dedicate alla raccolta dati, interviste e assessment approfondito.​
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>3️⃣ Elaborazione e redazione report</h3>
          <p>
           <strong>Sintesi strutturata</strong> delle evidenze e delle aree di miglioramento.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>4️⃣ Presentazione dei risultati</h3>
          <p>
            Condivisione dei principali insight e delle <strong>proposte di intervento</strong>.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>5️⃣ Sessione di feedback e allineamento​</h3>
          <p>
             Discussione aperta per validare le conclusioni e definire i prossimi passi.​
          </p>
        </div>
      </div>
    </section>
  );
}
