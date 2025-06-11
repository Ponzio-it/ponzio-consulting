// pages/index.js
import Head from 'next/head';
//import Navbar from '../components/Navbar';
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
          {/* Title ottimizzato (50–60 caratteri) */}
          <title>Fractional CDO per PMI e Startup | Quantiora</title>

          {/* Meta description ottimizzata (120–155 caratteri) */}
          <meta
            name="description"
            content="Fractional CDO per startup e PMI: governance dati, compliance GDPR, sicurezza ISO27001, AI Act, KPI dashboard e strategie data-driven per scalare con metodo."
          />

          {/* Viewport e robots avanzati */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          {/* Canonical */}
          <link rel="canonical" href="https://www.quantiora.it" />

          {/* Open Graph */}
          <meta property="og:site_name" content="Quantiora" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="it_IT" />
          <meta property="og:url" content="https://www.quantiora.it/" />
          <meta
            property="og:title"
            content="Fractional CDO per PMI e Startup | Quantiora"
          />
          <meta
            property="og:description"
            content="Data governance, GDPR, ISO27001 e AI Act: soluzioni data-driven per PMI e startup che vogliono crescere con metodo."
          />
          <meta
            property="og:image"
            content="https://www.quantiora.it/og-image.jpg"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fractional CDO per PMI e Startup | Quantiora" />
          <meta
            name="twitter:description"
            content="Soluzioni di fractional CDO: governance dati, compliance e strategie data-driven per scalare con metodo."
          />
          <meta
            name="twitter:image"
            content="https://www.quantiora.it/og-image.jpg"
          />
          {/* Se hai un handle Twitter aziendale, attivalo qui */}
          {/* <meta name="twitter:site" content="@PonzioConsulting" /> */}

          {/* Tema colore per browser mobili */}
          <meta name="theme-color" content="#ffffff" />

          {/* JSON-LD per Structured Data (Organization) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Quantiora",
                "url": "https://www.quantiora.com",
                "logo": "https://www.quantiora.com/logo.png",
                "sameAs": [
                  "https://www.linkedin.com/company/quantiora",               ]
              }`,
            }}
          />
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
