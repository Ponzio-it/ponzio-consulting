// components/Navbar.js
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
      <nav className={styles.nav}>
        <Image src="/logo.png" alt="Ponzio Consulting Logo"  width={100} height={50} className={styles.logo} />
        <h1>Ponzio Consulting Ditta individuale</h1>
      </nav>
    );
  }
  