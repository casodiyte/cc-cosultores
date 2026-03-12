import Link from 'next/link';
import { ArrowLeft, CheckCircle2, FileText, Briefcase, HeartPulse } from 'lucide-react';
import Accordion from '@/components/Accordion';
import StepList from '@/components/StepList';
import styles from './page.module.css';

export const metadata = {
    title: 'Asesoría de Pensiones | C&C Consultores',
    description: 'Estrategias de pensión, Modalidad 40, proyecciones y trámites para asegurar tu retiro.',
};

export default function PensionesPage() {
    const stepsData = [
        {
            title: 'Diagnóstico Inicial',
            description: 'Revisamos detalladamente tu reporte de semanas cotizadas y tu salario promedio de los últimos 5 años para entender tu situación actual.'
        },
        {
            title: 'Proyección Escenarios',
            description: 'Calculamos simulaciones con y sin Modalidad 40 para que visualices matemáticamente la inversión y el retorno esperado.'
        },
        {
            title: 'Integración de Expediente',
            description: 'Validamos que todos tus datos en la CURP, RFC e IMSS estén correctos antes de iniciar cualquier proceso oficial, evitando retrasos.'
        },
        {
            title: 'Ingreso del Trámite',
            description: 'Te acompañamos físicamente y/o gestionamos la documentación necesaria ante la subdelegación correspondiente.'
        },
        {
            title: 'Resolución y Cobro',
            description: 'Revisamos la resolución emitida para confirmar que el monto sea el correcto, y procedemos con el trámite de devolución de Afore e Infonavit.'
        }
    ];

    return (
        <main className={styles.main}>

            {/* HEADER HERO INTERNAL */}
            <section className={styles.internalHero}>
                <div className="container">
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} /> Volver al Hub Principal
                    </Link>
                    <div className={styles.headerContent}>
                        <div className={styles.titleBadge}>
                            <TrendingUpIcon className={styles.badgeIcon} />
                            Servicio Especializado
                        </div>
                        <h1 className={styles.pageTitle}>Asesoría Integral en Pensiones</h1>
                        <p className={styles.pageDesc}>
                            No dejes tu futuro al azar. Maximiza tu pensión con el acompañamiento de expertos financieros y legales que diseñarán la ruta óptima para tu pre-retiro.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT LAYOUT */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.layoutGrid}>

                        {/* Left Column: Details & Accordions */}
                        <div className={styles.leftColumn}>

                            <h2 className={styles.sectionHeading}>Servicios Disponibles</h2>

                            <div className={styles.servicesGrid}>
                                <div className={styles.detCard}>
                                    <CheckCircle2 className={styles.detIcon} />
                                    <h3>Estrategia Modalidad 40</h3>
                                    <p>Inversión inteligente para topes salariales.</p>
                                </div>
                                <div className={styles.detCard}>
                                    <CheckCircle2 className={styles.detIcon} />
                                    <h3>Recuperación Afore</h3>
                                    <p>Trámite de saldos SAR 92 y Retiro 97.</p>
                                </div>
                                <div className={styles.detCard}>
                                    <CheckCircle2 className={styles.detIcon} />
                                    <h3>Negativas y Resoluciones</h3>
                                    <p>Apelaciones e impugnaciones ante el IMSS.</p>
                                </div>
                                <div className={styles.detCard}>
                                    <CheckCircle2 className={styles.detIcon} />
                                    <h3>Viudez y Orfandad</h3>
                                    <p>Gestión expedita para beneficiarios.</p>
                                </div>
                            </div>

                            <h2 className={styles.sectionHeading} style={{ marginTop: '50px' }}>Preguntas Frecuentes</h2>

                            <div className={styles.accordionsWrapper}>
                                <Accordion title="¿Cuál es la diferencia entre Ley 73 y Ley 97?">
                                    La Ley 73 aplica para quienes comenzaron a cotizar antes del 1 de julio de 1997 y permite una pensión vitalicia calculada en base al promedio salarial de los últimos 5 años. La Ley 97 depende exclusivamente del fondo ahorrado en tu Afore.
                                </Accordion>
                                <Accordion title="¿A qué edad me conviene jubilarme?">
                                    Todo depende de tus semanas cotizadas y tu salario promedio. Jubilarse a los 60 otorga el 75% del monto calculado, mientras que a los 65 años accedes al 100%. Nosotros hacemos los cálculos matemáticos para indicarte el momento óptimo financiero.
                                </Accordion>
                                <Accordion title="¿Qué pasa si dejé de cotizar muchos años?">
                                    Existen mecanismos como la Modalidad 10 (Trabajadores Independientes) o la reinscripción patronal para reactivar tus derechos. Se requiere cotizar al menos 52 semanas consecutivas.
                                </Accordion>
                            </div>

                        </div>

                        {/* Right Column: Sticky Sidebar / StepList */}
                        <div className={styles.rightColumn}>
                            <div className={styles.stickyBox}>
                                <h3 className={styles.sidebarTitle}>Nuestra Metodología Paso a Paso</h3>
                                <p className={styles.sidebarDesc}>Conoce cómo te llevaremos desde la incertidumbre hasta el cobro de tu pensión y afore.</p>

                                <StepList steps={stepsData} />

                                <div className={styles.ctaBox}>
                                    <h4>¿Listo para asegurar tu futuro?</h4>
                                    <p>Déjanos asesorarte sin compromiso.</p>
                                    <Link href="/contacto" className={styles.btnAction}>
                                        Agenda tu Cita
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}

// Inline Icon component for internal use
function TrendingUpIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    );
}
