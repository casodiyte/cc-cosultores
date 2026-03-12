import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'C&C Consultores | Asesoría en Pensiones y Gestoría',
  description: 'Especialistas en asesoría de pensiones, trámites IMSS, Infonavit, Afore y gestoría administrativa integral.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
