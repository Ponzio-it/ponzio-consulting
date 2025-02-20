// components/Navbar.js
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
         <Image 
           src="/logo.png" 
           alt="Ponzio Consulting Logo"  
           width={80} 
           height={40} 
           className={styles.logo} 
        />
         <h1 className={styles.companyName}>Ponzio Consulting Ditta Individuale</h1>
        </div>

      </nav>
    );
  }
  