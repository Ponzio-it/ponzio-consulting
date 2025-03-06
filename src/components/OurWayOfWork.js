import styles from '../styles/Home.module.css';

export default function OurWayOfWork() {
  return (
    <section id="our-way-of-work" className={styles.ourWayOfWork} aria-labelledby="our-way-heading">
      <h2 id="our-way-heading">Come lavoriamo</h2>
      <p>
        In Ponzio Consulting adottiamo un metodo chiaro, strutturato e basato su cicli iterativi veloci, per garantire risultati tangibili.
      </p>
      <ul>
        <li><strong>Analisi Approfondita:</strong> Comprendiamo a fondo i tuoi bisogni e obiettivi aziendali.</li>
        <li><strong>Progettazione Strategica:</strong> Definiamo una roadmap chiara con step misurabili.</li>
        <li><strong>Esecuzione Agile:</strong> Sviluppiamo soluzioni rapide, flessibili e incrementali.</li>
        <li><strong>Ottimizzazione Continua:</strong> Monitoriamo e ottimizziamo costantemente il processo.</li>
      </ul>
    </section>
  );
}
