// components/Hero.js
import styles from '../styles/Home.module.css';
import { ArrowDown } from 'lucide-react';


export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 id="hero-heading">La tua Intelligence aziendale per scalare senza caos</h1>
          <p>
            In Ponzio Consulting siamo l&apos;intelligence dei CEO di startup e PMI.
            Trasformiamo dati complessi in dashboard personalizzate, gestiamo il flusso informativo aziendale,
            e realizziamo progetti su misura, compliant con GDPR e cybersicurezza.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#contact" className={styles.ctaButton}>
              Prenota una Consulenza Gratuita
            </a>
          </div>
        </div>
        <a href="#our-way" className={styles.scrollDown} aria-label="Scorri giù">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}
