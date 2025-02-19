// components/Hero.js
import styles from '../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading">Accelera il tuo business con l'innovazione digitale</h1>
        <p>
          
          Ponzio Consulting è una società di consulenza specializzata nello sviluppo di prodotti digitali, 
          IT consulting e strategie di crescita per startup e nuove imprese. 
          La nostra missione è fornire agli imprenditori gli strumenti, le tecnologie e le strategie 
          per costruire aziende scalabili e data-driven.
        </p>
        <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza</a>
      </div>
    </section>
  );
}
