// components/Hero.js
import styles from '../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading">Accelera il tuo business con l'innovazione digitale</h1>
        <p>
          Ponzio Consulting aiuta la tua azienda a crescere con marketing digitale, AI e growth hacking.
        </p>
        <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza</a>
      </div>
    </section>
  );
}
