// components/Hero.js
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ArrowDown } from 'lucide-react';


export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroOverlay}>
      <div className={styles.logoWrapper}>
          <Image
            src="/logos/Logo-Quantiora.png"
            alt="Quantiora Logo"
            width={400}
            height={400}
            className={styles.heroLogo}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 id="hero-heading">La tua azienda è pronta per usare l&apos;AI?</h1>
          {/*<div className={styles.buttonGroup}>
            <a href="#contact" className={styles.ctaButton}>
              Richiedi Consulenza personalizzata
            </a>
          </div>*/}
        </div>
        <a href="#our-way" className={styles.scrollDown} aria-label="Scorri giù">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}
