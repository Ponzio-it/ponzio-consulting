// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurWayOfWork from '../components/OurWayOfWork';
import Services from '../components/Services';
import Costumers from '../components/Customers';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ponzio Consulting | Crescita Agile per Startup e PMI</title>
        <meta name="description" content="Ponzio Consulting aiuta CEO di startup e PMI a crescere senza caos. Dashboard KPI, ottimizzazione dei processi decisionali, e strategie scalabili." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Ponzio Consulting | Crescita Agile per Startup e PMI" />
        <meta property="og:description" content="Business Intelligence, flussi informativi strutturati e decisioni strategiche data-driven per far crescere la tua azienda in modo sostenibile." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ponzioconsulting.com" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ponzio Consulting | Crescita Agile per Startup e PMI" />
        <meta name="twitter:description" content="Strategic operations partner per CEO. Dashboard KPI, crescita data-driven, flussi decisionali ottimizzati." />
        <meta name="twitter:image" content="/og-image.jpg" />

        <link rel="canonical" href="https://www.ponzioconsulting.com" />
      </Head>
      {/*<Navbar /> */}
      <main>
        <Hero />
        <OurWayOfWork />
        <Services />
        <Costumers />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
