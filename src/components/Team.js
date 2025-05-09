// Team.js
import Image from 'next/image';
import styles from '../styles/Team.module.css';

const teamMembers = [
  {
    name: 'Ettore Ponzio',
    title: 'CEO & Founder',
    image: '/team/foto-ponzio.jpeg',
    linkedin: 'https://www.linkedin.com/in/ettore-ponzio/',
    description: 'Conduce la visione strategica e guida le operazioni quotidiane di Quantiora.',
  },

];

export default function Team() {
  return (
    <section className={styles.team} id="team">
      <h2 className={styles.title}>Il nostro Team</h2>
      <div className={styles.teamList}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <div className={styles.photoWrapper}>
              <Image
                src={member.image}
                alt={`${member.name}`}
                width={120}
                height={120}
                className={styles.photo}
              />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.title}</p>
            <p className={styles.description}>{member.description}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}