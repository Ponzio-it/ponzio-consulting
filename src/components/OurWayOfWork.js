import styles from '../styles/Home.module.css';

export default function OurWayOfWork() {
  return (
    <section id="our-way-of-work" className={styles.ourWayOfWork} aria-labelledby="our-way-heading">
      <h2 id="our-way-heading">Come Lavoriamo</h2>
      <p>
        Aiutiamo CEO di startup e PMI a ridurre l&apos;incertezza e trasformare il caos iniziale in un business scalabile e strutturato. 
        Il nostro metodo è basato su dati concreti, iterazioni rapide e un approccio collaborativo per massimizzare crescita e efficienza.
      </p>

      <div className={styles.workProcess}>
        <div className={styles.processStep}>
          <h3>🔍 Validazione del Problema</h3>
          <p>
            Tutto inizia con una <strong>chiamata gratuita</strong> per comprendere a fondo le sfide del tuo business. 
            Attraverso un&apos;analisi strutturata e un ascolto attento, identifichiamo punti critici e opportunità di crescita, 
            proponendo soluzioni mirate, scalabili e basate su dati concreti.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>📋 Proposta di Collaborazione</h3>
          <p>
            Dopo l&apos;analisi iniziale, sviluppiamo una <strong>strategia personalizzata</strong> con soluzioni concrete e misurabili. 
            Ogni azione è strutturata su <strong>KPI chiari</strong>, garantendo crescita scalabile, efficienza operativa e risultati tangibili. 
            Il nostro approccio Agile ci permette di adattarci rapidamente alle esigenze del business.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>🚀 Esecuzione Agile</h3>
          <p>
            Implementiamo strategie con un approccio Agile: <strong>sprint mirati</strong>, stand-up giornalieri e retrospettive periodiche. 
            Questo garantisce <strong>adattabilità</strong>, ottimizzazione costante e il raggiungimento dei KPI, trasformando ogni iterazione 
            in un passo concreto verso scalabilità ed efficienza.
          </p>
        </div>

        <div className={styles.processStep}>
          <h3>🔄 Testing & Feedback Loop</h3>
          <p>
            Misuriamo costantemente i risultati con un <strong>approccio data-driven</strong>. 
            Ogni azione viene testata, validata e ottimizzata per garantire che le strategie adottate portino 
            alla crescita sostenibile del business. La nostra collaborazione è un ciclo continuo di miglioramento.
          </p>
        </div>
      </div>
    </section>
  );
}
