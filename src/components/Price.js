import styles from '../styles/Home.module.css';

export default function Price() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
        <div className={styles.servicesContainer}>
            <h2 id="services-heading">Unico Prezzo, Tutto incluso</h2>
            <div className={styles.offerGrid}></div>
                <div className={styles.offerCard}>
                <h3>🧭 Una fotografia chiara della situazione attuale</h3>
                </div>
                <div className={styles.offerCard}>
                <h3>🚨 L&apos;elenco dei punti critici da sistemare</h3>
            </div>
            <div className={styles.offerCard}>
                <h3>✅ Una guida pratica per mettersi in regola e proteggere il business</h3>
            </div>
            <div className={styles.offerCard}>
                <h3>🚀 I rischi da evitare e le opportunità da cogliere</h3>
            </div>
            <div className={styles.offerCard}>
                <h3>🛡️ Roadmap di adeguamento a 6, 12 e 24 mesi</h3>
            </div>
            <div className={styles.offerBanner}>
                
                <img 
                    src="/images/prezzo.png" 
                    alt="Offerta: AI Assessment più Privacy assesment 1995€" 
                    className={styles.offerImage}
                />
            </div>
            <div className={styles.buttonGroup}>
                <a href="#contact" className={styles.ctaButton}>Richiedi Demo Personalizzata</a>
            </div>
        </div>
    </section>
  ); 
}