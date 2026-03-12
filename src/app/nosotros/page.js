import Link from 'next/link';
import { Target, Users, Search, Building2, CheckCircle2, Award, Scale, Briefcase, FileSearch } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Nosotros | C&C Consultores',
    description: 'Conoce nuestra historia, misión y los valores que respaldan nuestra labor como expertos en seguridad social.',
};

export default function NosotrosPage() {
    return (
        <main className={styles.main}>

            {/* NOSOTROS HERO */}
            <section className={styles.hero}>
                <div className={styles.heroBgImageWrapper}>
                    <img
                        src="https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Gemini_Generated_Image_swytl0swytl0swyt.png"
                        alt="Nuestra Firma"
                        className={styles.heroBgImage}
                        aria-hidden="true"
                    />
                </div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.badge}><Building2 size={16} /> Nuestra Firma</div>
                        <h1 className={styles.title}>Expertos en tu Futuro Laboral</h1>
                        <p className={styles.desc}>
                            En C&C Consultores trabajamos incansablemente para garantizar que los derechos laborales y de seguridad social de los mexicanos se respeten y multipliquen.
                        </p>
                    </div>
                </div>
            </section>

            {/* HISTORIA Y MISIÓN */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.textColumn}>
                            <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
                            <div className={styles.accentLine}></div>
                            <p className={styles.leadPara}>
                                Nacimos de la necesidad de combatir la desinformación. Demasiadas personas pierden dinero, semanas cotizadas o beneficios de ley simplemente por no conocer el laberinto burocrático.
                            </p>
                            <p className={styles.standardPara}>
                                A lo largo de <strong>más de 10 años</strong>, hemos conformado un equipo multidisciplinario de abogados, contadores y estrategas financieros especialistas en el marco normativo del Instituto Mexicano del Seguro Social e Infonavit. No somos "gestores exprés"; somos analistas que auditan historiales, encuentran anomalías y diseñan estrategias 100% apegadas a la ley.
                            </p>
                            <p className={styles.standardPara}>
                                Hoy en día, nos enorgullece ser un referente de transparencia. Nuestro proceso es claro: evaluamos, demostramos escenarios matemáticos, asesoramos la decisión y ejecutamos el trámite de inicio a fin.
                            </p>
                        </div>

                        <div className={styles.valuesColumn}>
                            <div className={styles.valueCard}>
                                <Target className={styles.valIcon} />
                                <h3>Misión</h3>
                                <p>Educar, empoderar y acompañar al trabajador mexicano en el rescate y maximización de su patrimonio laboral para el retiro.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <Search className={styles.valIcon} />
                                <h3>Visión</h3>
                                <p>Ser la firma consultora en seguridad social más confiable de México, reconocida por sus resoluciones éticas, precisas y ágiles.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <Users className={styles.valIcon} />
                                <h3>Valores</h3>
                                <p>Apego a la Ley, Honestidad técnica (no prometemos imposibles) y Empatía genuina con la situación y urgencia de cada cliente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NUESTRO ENFOQUE Y METODOLOGÍA */}
            <section className={styles.approachSection}>
                <div className="container">
                    <div className={styles.approachHeader}>
                        <h2 className={styles.sectionTitle}>Nuestro Enfoque de Trabajo</h2>
                        <p className={styles.approachDesc}>
                            No somos improvisados. Cada caso que llega a nuestro escritorio pasa por un riguroso proceso de auditoría legal y financiera.
                        </p>
                    </div>

                    <div className={styles.approachGrid}>
                        <div className={styles.approachItem}>
                            <div className={styles.approachIconWrap}>
                                <FileSearch className={styles.appIcon} />
                            </div>
                            <div className={styles.approachContent}>
                                <h4>Auditoría Temprana</h4>
                                <p>Antes de iniciar cualquier trámite ante el IMSS o Infonavit, auditamos tú documentación para detectar inconsistencias previas físicas o electrónicas (CURP doble, errores de nombre, semanas no reconocidas).</p>
                            </div>
                        </div>

                        <div className={styles.approachItem}>
                            <div className={styles.approachIconWrap}>
                                <Scale className={styles.appIcon} />
                            </div>
                            <div className={styles.approachContent}>
                                <h4>Abogacía Preventiva</h4>
                                <p>Armamos los expedientes previendo los posibles criterios de rechazo de las dependencias. Si el Seguro Social niega un derecho injustificadamente, ya tenemos la ruta de impugnación legal preparada.</p>
                            </div>
                        </div>

                        <div className={styles.approachItem}>
                            <div className={styles.approachIconWrap}>
                                <Briefcase className={styles.appIcon} />
                            </div>
                            <div className={styles.approachContent}>
                                <h4>Proyección Financiera</h4>
                                <p>En casos de retiro y Pensiones, realizamos escenarios matemáticos hiperrealistas. Calculamos la inflación anual, el costo de la Modalidad 40, y el punto exacto de retorno de inversión.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className={styles.whyUsSection}>
                <div className="container">
                    <div className={styles.whyUsHeader}>
                        <h2 className={styles.sectionTitle}>¿Por qué elegir C&C Consultores?</h2>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <CheckCircle2 color="var(--color-primary)" size={28} />
                            <div>
                                <h4>Análisis Matemático Previo</h4>
                                <p>No actuamos a ciegas. Te presentamos una proyección financiera clara antes de que tomes cualquier decisión o inicies inversión en Modalidad 40.</p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <CheckCircle2 color="var(--color-primary)" size={28} />
                            <div>
                                <h4>Acompañamiento Físico Integrado</h4>
                                <p>Para trámites críticos, no te mandamos solo a ventanilla. Vamos contigo o lo tramitamos con carta poder para que no te equivoques.</p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <CheckCircle2 color="var(--color-primary)" size={28} />
                            <div>
                                <h4>Expertiz Legal contra Negativas</h4>
                                <p>Si el Instituto emite una negativa de pensión injustificada, nuestro equipo de abogados se encarga de apelar e impugnar fundamentados en la ley.</p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <CheckCircle2 color="var(--color-primary)" size={28} />
                            <div>
                                <h4>Garantía de Confidencialidad</h4>
                                <p>Tus datos biográficos y patrimoniales se manejan bajo estricto contrato de aviso de privacidad y ética profesional incorruptible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <Award size={48} className={styles.ctaIcon} />
                        <h2>Tranquilidad y Respaldo a tu lado</h2>
                        <p>El mejor momento para planear tu futuro o arreglar tu situación ante el IMSS es hoy.</p>
                        <Link href="/#contacto" className={styles.btnPrimary}>
                            Agenda una Asesoría de Diagnóstico
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
