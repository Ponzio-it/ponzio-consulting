// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurWayOfWork from '../components/OurWayOfWork';
import Services from '../components/Services';
import Costumers from '../components/Customers';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ponzio Consulting | Esperti di Crescita Digitale</title>
        <meta name="description" content="Aiutiamo le aziende a crescere con strategie di sviluppo prodotto, consulenza IT e growth hacking." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ponzio Consulting | Esperti di Crescita Digitale" />
        <meta property="og:description" content="Aiutiamo le aziende a crescere con strategie di di sviluppo prodotto, consulenza IT e growth hacking." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <OurWayOfWork />
        <Services />
        <Costumers />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
