// components/Hero.js
import styles from '../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading">Il tuo partner strategico per scalare senza caos</h1>
        <p>
          In Ponzio Consulting, affianchiamo i CEO di startup e PMI 
          nella trasformazione dell&apos;incertezza iniziale in un business scalabile e strutturato.  
          Implementiamo strategie basate su KPI, automazione e processi ottimizzati,  
          permettendoti di focalizzarti sulla crescita mentre ci occupiamo di costruire una base solida per il tuo business.
        </p>
        {/* CTA Button and Profile Button Stacked */}
        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza Gratuita</a>
          <a href="#our-way-of-work" className={styles.ctaButton}>Come Lavoriamo</a>
        </div>
      </div>
    </section>
  );
}
