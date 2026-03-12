import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  metadataBase: new URL('https://cc-consultores.com'),
  title: {
    default: 'C&C Consultores | Asesoría en Pensiones y Gestoría',
    template: '%s | C&C Consultores',
  },
  description: 'Especialistas en asesoría de pensiones, trámites IMSS, Infonavit, Afore y gestoría administrativa integral en México.',
  keywords: ['Pensiones', 'IMSS', 'Infonavit', 'Afore', 'Gestoría Administrativa', 'Jubilación', 'Asesoría Legal', 'Aclaración de semanas', 'México', 'Seguridad Social'],
  authors: [{ name: 'C&C Consultores' }],
  creator: 'C&C Consultores',
  publisher: 'C&C Consultores',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'C&C Consultores | Asesoría en Pensiones',
    description: 'Asegura tu futuro con los expertos en pensiones, trámites IMSS, Infonavit, Afore y gestoría técnica legal en México.',
    url: 'https://cc-consultores.com',
    siteName: 'C&C Consultores',
    images: [
      {
        url: 'https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Picsart_26-03-07_12-57-34-298%20(1).png',
        width: 1200,
        height: 630,
        alt: 'Logo de C&C Consultores',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C&C Consultores - Especialistas en tu Retiro',
    description: 'No dejes tus derechos laborales al azar. Un experto está listo para analizar tu caso hoy mismo.',
    images: ['https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Picsart_26-03-07_12-57-34-298%20(1).png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "C&C Consultores",
  "image": "https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Picsart_26-03-07_12-57-34-298%20(1).png",
  "@id": "https://cc-consultores.com",
  "url": "https://cc-consultores.com",
  "telephone": "+525514118922",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "México",
    "addressCountry": "MX"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://wa.me/525514118922"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
