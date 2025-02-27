// components/Hero.js
import styles from '../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading">Accelera il tuo business con l&apos;innovazione digitale</h1>
        <p>
          Ponzio Consulting è una società di consulenza specializzata nello sviluppo di prodotti digitali, 
          IT consulting e strategie di crescita per startup e nuove imprese. 
          La nostra missione è fornire agli imprenditori gli strumenti, le tecnologie e le strategie 
          per costruire aziende scalabili e data-driven.
        </p>
        {/* CTA Button and Profile Button Stacked */}
        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza Gratuita</a>
          <a 
            href="https://1drv.ms/p/c/0b6deb4d2e7cca09/EWb137feeLFBvZhzuhNLunABNS45H2-tO49hzfqDwBNNrg?e=6P3n3q"
            className={styles.profileButton} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Guarda il Profilo Aziendale
          </a>
        </div>
      </div>
    </section>
  );
}
