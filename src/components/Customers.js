// components/Customers.js

import Image from "next/image";
import styles from "../styles/Customers.module.css";
import { Star, StarHalf } from "lucide-react";

const customersData = [
  {
    name: "HSE CONSULTING S.R.L",
    logo: "/logos/hse.png",
    website: "https://www.hseconsulting.info",
    customerName: "CHIARA VINCIGUERRA: CEO HSE CONSULTING S.R.L",
    rating: 5.0,
  },
  {
    name: "PERINO PIERO S.R.L",
    logo: "/logos/perino-piero.png",
    website: "https://www.perinopierosrl.it",
    customerName: "LUCA PERINO: CEO PERINO PIERO S.R.L",
    rating: 4.8,
  },
  {
    name: "GBS GROUP",
    logo: "/logos/gbs.svg",
    website: "https://www.gbs-group.it",
    customerName: "MARCO SARACENO: CEO GBS GROUP",
    rating: 4.7,
  },
  {
    name: "IMPACT HUB S.R.L",
    logo: "/logos/impact-hub.svg",
    website: "https://milan.impacthub.net/",
    customerName: "MARCO NANNINO: CEO IMPACT HUB SRL",
    rating: 4.9,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} size={18} fill="#FFD700" color="#FFD700" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" size={18} color="#FFD700" />);
  }

  const remaining = totalStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(<Star key={`empty-${i}`} size={18} color="#FFD700" fill="none" />);
  }

  return <div className={styles.stars}>{stars}</div>;
};

export default function Customers() {
  return (
    <section className={styles.customers} id="customers">
      <h2 className={styles.title}>I nostri Partner</h2>
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
            {/*<p className={styles.customerName}>{customer.customerName}</p>*/}
            {renderStars(customer.rating)}
            <p className={styles.ratingText}>{`${customer.rating} su 5`}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
