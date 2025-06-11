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
          {/* Titolo ottimizzato (55 caratteri max) */}
            <title>Fractional CDO per PMI & Startup – Data Governance e GDPR</title>

          {/* Meta description ottimizzata (150 caratteri max) */}
          <meta
            name="description"
            content="Fractional CDO per PMI e startup: data governance, compliance GDPR, sicurezza ISO27001, AI Act e strategie data-driven per crescere con metodo."
          />

          {/* Verifica Google Search Console */}
          <meta name="google-site-verification" content="NvYjV0JpXwN0zp6bG8nBc8lWY-i2ZJDQI4qSLcKTuZ0" />
          {/* Verifica Bing Webmaster */}
          <meta name="msvalidate.01" content="TUO_CODICE_BING_VERIFICATION" />

          {/* Viewport e robots avanzati */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          {/* Canonical e Sitemap */}
          <link rel="canonical" href="https://www.quantiora.it/" />
          <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.quantiora.it/sitemap.xml" />

          {/* Hreflang (se prevedi versioni multilingua) */}
          <link rel="alternate" href="https://www.quantiora.it/" hreflang="it" />
          {/* <link rel="alternate" href="https://www.quantiora.com/" hreflang="en" /> */}

          {/* Open Graph */}
          <meta property="og:site_name" content="Quantiora" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="it_IT" />
          <meta property="og:url" content="https://www.quantiora.it/" />
          <meta
          property="og:title"
          content="Fractional CDO per PMI & Startup – Data Governance e GDPR"
          />
          <meta
          property="og:description"
          content="Data governance, compliance GDPR, ISO27001 e AI Act: strategie data-driven per PMI e startup che vogliono scalare con metodo."
          />
          <meta property="og:image" content="https://www.quantiora.it/og-image.jpg" />
          <meta property="og:image:alt" content="Quantiora – soluzioni data-driven" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fractional CDO per PMI & Startup – Quantiora" />
          <meta
          name="twitter:description"
          content="Soluzioni fractional CDO: governance dati, compliance e strategie data-driven per far crescere la tua azienda."
          />
          <meta name="twitter:image" content="https://www.quantiora.it/og-image.jpg" />
          {/* <meta name="twitter:site" content="@Quantiora" /> */}

          {/* Tema colore for browser mobili */}
          <meta name="theme-color" content="#ffffff" />

          {/* Structured Data – Organization + WebSite + BreadcrumbList */}
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Quantiora",
              "url": "https://www.quantiora.it",
              "logo": "https://www.quantiora.it/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/quantiora"
              ]
            },
            {
              "@type": "WebSite",
              "url": "https://www.quantiora.it",
              "name": "Quantiora",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.quantiora.it/search?query={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.quantiora.it/"
                }
              ]
            }
          ]
          })
          }}
/>    </Head>

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
