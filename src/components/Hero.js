// components/Hero.js
import styles from '../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading">Riduci il caos e costruisci processi scalabili</h1>
        <p>
          Ponzio Consulting aiuta i CEO di startup e PMI a trasformare la crescita imprevedibile 
          in un processo scalabile e misurabile. Creiamo strategie basate su KPI, automazione e 
          iterazione continua, permettendoti di ottimizzare i processi aziendali, rimanere agile 
          e rispondere rapidamente ai feedback del mercato.
        </p>
        {/* CTA Button and Profile Button Stacked */}
        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.ctaButton}>Prenota una Consulenza Gratuita</a>
          <a 
            href="https://1drv.ms/p/c/0b6deb4d2e7cca09/Eax1juz5B3pHqj--ODrQQwYBYXz3TCZd3UrGeLD6nZ1wKQ?e=bdOjut"
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
