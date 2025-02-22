// components/Customers.js

import Image from "next/image";
import styles from "../styles/Customers.module.css";

const customersData = [
  {
    name: "HSE CONSULTING S.R.L",
    logo: "/logos/hse.png",
    website: "https://www.hseconsulting.info",
    customerName: "CHIARA BOGINO: CEO HSE CONSULTING S.R.L",
    quote: "Ponzio Consulting ci ha permesso di aumentare di molto la nostra produttività automatizzando al meglio i nostri strumenti.",
  },
];

export default function Customers() {
  return (
    <section className={styles.customers} id="customers">
      <h2 className={styles.title}>I nostri Clienti</h2>
      <div className={styles.customerList}>
        {customersData.map((customer, index) => (
          <div key={index} className={styles.customerCard}>
            <a href={customer.website} target="_blank" rel="noopener noreferrer">
              <Image
                src={customer.logo}
                alt={`${customer.name} Logo`}
                width={100}
                height={100}
                className={styles.logo}
              />
            </a>
            <h3 className={styles.name}>{customer.name}</h3>
            <p className={styles.customerName}>{customer.customerName}</p>
            <p className={styles.quote}>`"${customer.quote}"`</p>
        </div>
        ))}
      </div>
    </section>
  );
}
