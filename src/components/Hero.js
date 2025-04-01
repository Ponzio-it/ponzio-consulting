// components/Hero.js
import styles from '../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading">La tua Intelligence aziendale per scalare senza caos</h1>
        <p>
          In Ponzio Consulting siamo l&apos;intelligence dei CEO di startup e PMI.
          Trasformiamo dati complessi in dashboard personalizzate, gestiamo in modo strategico il flusso informativo aziendale,
          e realizziamo progetti su misura, sempre compliant con GDPR e standard di cybersicurezza.
          Il nostro obiettivo è liberarti dal caos operativo per farti concentrare sulla crescita del tuo business.
        </p>
        {/* CTA Button and Profile Button Stacked */}
        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza Gratuita</a>
        </div>
      </div>
    </section>
  );
}
