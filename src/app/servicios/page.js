import Link from 'next/link';
import { ShieldCheck, ArrowRight, TrendingUp, HeartPulse, HardDrive, FileText, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Todos los Servicios | C&C Consultores',
    description: 'Catálogo completo de servicios: Pensiones, Trámites IMSS, Infonavit y Gestoría Administrativa.',
};

export default function ServiciosPage() {
    return (
        <main className={styles.main}>

            {/* SERVICES HERO */}
            <section className={styles.hero}>
                <div className={styles.heroBgImageWrapper}>
                    <img
                        src="https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/ChatGPT%20Image%2011%20mar%202026%2C%2011_23_44%20p.m..png"
                        alt="Nuestros Servicios"
                        className={styles.heroBgImage}
                        aria-hidden="true"
                    />
                </div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.badge}><ShieldCheck size={16} /> Catálogo de Soluciones</div>
                        <h1 className={styles.title}>Nuestros Servicios</h1>
                        <p className={styles.desc}>
                            Desglosamos todas nuestras áreas de especialidad para que encuentres exactamente el trámite o asesoría que necesitas.
                        </p>
                    </div>
                </div>
            </section>

            {/* TABS / SECTIONS MENU (Internal navigation) */}
            <div className={styles.stickyNav}>
                <div className="container">
                    <div className={styles.navScroller}>
                        <a href="#pensiones" className={styles.navLink}>Pensiones</a>
                        <a href="#imss" className={styles.navLink}>IMSS</a>
                        <a href="#infonavit" className={styles.navLink}>Infonavit & Afore</a>
                        <a href="#gestoria" className={styles.navLink}>Gestoría Administrativa</a>
                    </div>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <div className="container">

                    {/* SECTION 1: PENSIONES */}
                    <section id="pensiones" className={styles.serviceBlock}>
                        <div className={styles.blockHeader}>
                            <div className={`${styles.iconWrap} ${styles.iconRedBg}`}>
                                <TrendingUp size={28} className={styles.iconRed} />
                            </div>
                            <h2>Asesoría de Pensiones</h2>
                            <p>Maximizamos los beneficios de tu retiro laboral con estrategias diseñadas a tu medida basándonos en tu historial salarial.</p>
                        </div>

                        <div className={styles.cardsGrid}>
                            <ServiceDetailCard title="Estrategia y Proyección" desc="Evaluación de escenarios financieros y cálculo exacto de la pensión considerando tu último salario base." />
                            <ServiceDetailCard title="Modalidad 40" desc="Planeación estratégica para maximizar tus aportaciones voluntarias y mejorar dramáticamente tu promedio salarial." />
                            <ServiceDetailCard title="Modalidad 10" desc="Incorporación voluntaria al régimen obligatorio para trabajadores independientes." />
                            <ServiceDetailCard title="Recuperación de Afore" desc="Trámites de recuperación de montos remanentes concentrados en tus subcuentas SAR 92 y Retiro 97." />
                            <ServiceDetailCard title="Negativas de Pensión" desc="Asesoría experta ante resoluciones o negativas por parte del Instituto para encontrar rutas viables." />
                            <ServiceDetailCard title="Viudez y Orfandad" desc="Trámite, apelación y gestión cuidadosa de expedientes para transferir la pensión a beneficiarios legales." />
                            <ServiceDetailCard title="Validación de Requisitos" desc="Revisión documental exhaustiva de tu expediente previo al trámite para asegurar factibilidad inmediata." />
                            <ServiceDetailCard title="Guía Paso a Paso" desc="Ruta de acompañamiento integral desde la baja laboral hasta la obtención de tu primer pago." />
                        </div>

                        <div className={styles.blockFooter}>
                            <Link href="/pensiones" className={styles.detailBtn}>
                                Ver Metodología Completa de Pensiones <ArrowRight size={16} />
                            </Link>
                        </div>
                    </section>

                    {/* SECTION 2: IMSS */}
                    <section id="imss" className={styles.serviceBlock}>
                        <div className={styles.blockHeader}>
                            <div className={`${styles.iconWrap} ${styles.iconSlateBg}`}>
                                <HeartPulse size={28} className={styles.iconSlate} />
                            </div>
                            <h2>Trámites IMSS</h2>
                            <p>Regularizamos y auditamos tu historial laboral en el Instituto Mexicano del Seguro Social para que tus derechos y semanas cotizadas estén 100% seguros.</p>
                        </div>

                        <div className={styles.cardsGrid}>
                            <ServiceDetailCard title="Descarga de Semanas" desc="Validación rigurosa de tu reporte de Semanas Cotizadas ante el IMSS." />
                            <ServiceDetailCard title="Altas y Bajas" desc="Asesoría puntual en movimientos patronales para evitar penalizaciones." />
                            <ServiceDetailCard title="Apoyo por Desempleo" desc="Trámite y cálculo de retiros parciales por desempleo modalidad normal." />
                            <ServiceDetailCard title="Desempleo Topado" desc="Análisis y gestión para retiros por desempleo retroactivos o topados." />
                            <ServiceDetailCard title="Servicio Médico Variable" desc="Gestión de altas emergentes para reactivación de servicio preclínico y hospitalario." />
                            <ServiceDetailCard title="Fechas de Retiro (SINDOS)" desc="Investigación de asignación y última fecha de baja registrada." />
                            <ServiceDetailCard title="Auditoría Salarial" desc="Captura y corrección de salarios promedio mal registrados por el patrón." />
                            <ServiceDetailCard title="Unificación de NSS" desc="Corrección y unificación de Números de Seguridad Social dobles o erróneos." />
                            <ServiceDetailCard title="Corrección de Datos" desc="Aclaraciones ante ventanillas IMSS por errores en CURP, nombre o fecha de nacimiento." />
                            <ServiceDetailCard title="Inyección de Semanas" desc="Recuperación administrativa de semanas laboradas no reconocidas en el sistema." />
                            <ServiceDetailCard title="Constancias Oficiales" desc="Trámite de constancia de no derechohabiente IMSS / ISSSTE para fines legales." />
                        </div>
                    </section>

                    {/* SECTION 3: INFONAVIT Y AFORE */}
                    <section id="infonavit" className={styles.serviceBlock}>
                        <div className={styles.blockHeader}>
                            <div className={`${styles.iconWrap} ${styles.iconSlateBg}`}>
                                <HardDrive size={28} className={styles.iconSlate} />
                            </div>
                            <h2>Infonavit y Afore</h2>
                            <p>Tomamos el control y rastreabilidad de la información de tu vivienda y el fondo general de tus ahorros para el retiro.</p>
                        </div>

                        <div className={styles.cardsGrid}>
                            <ServiceDetailCard title="Asesoría Estructural" desc="Guía paso a paso sobre cómo y cuándo solicitar tu crédito Infonavit." />
                            <ServiceDetailCard title="Crédito Mejoravit" desc="Gestión y acompañamiento para créditos de remodelación y mejoras de vivienda." />
                            <ServiceDetailCard title="Apertura de Portal" desc="Configuración y habilitación de 'Mi Cuenta Infonavit' sin contratiempos." />
                            <ServiceDetailCard title="Estado de Cuenta Histórico" desc="Descarga y análisis del histórico de aportaciones patronales de tu vivienda." />
                            <ServiceDetailCard title="Reseteo de Cuenta" desc="Desbloqueo técnico y recuperación de accesos extraviados al portal oficial." />
                            <ServiceDetailCard title="Auditoría de Crédito" desc="Análisis y resumen exhaustivo de saldos e intereses de crédito vigente." />
                            <ServiceDetailCard title="Rastreo de Afore" desc="Localización exacta de la entidad administradora de tu fondo de retiro." />
                            <ServiceDetailCard title="Expediente Electrónico" desc="Actualización de datos e integración biométrica para trámites Afore." />
                            <ServiceDetailCard title="Traspaso de Afore" desc="Gestión transparente para cambio de administradora hacia la de mejores rendimientos." />
                            <ServiceDetailCard title="Devolución de Excedentes" desc="Reclamación y devolución de saldos a favor por pagos realizados de más a Infonavit." />
                        </div>
                    </section>

                    {/* SECTION 4: GESTORIA ADICIONAL */}
                    <section id="gestoria" className={`${styles.serviceBlock} ${styles.lastBlock}`}>
                        <div className={styles.blockHeader}>
                            <div className={`${styles.iconWrap} ${styles.iconSlateBg}`}>
                                <FileText size={28} className={styles.iconSlate} />
                            </div>
                            <h2>Gestoría Administrativa</h2>
                            <p>Te ahorramos el caos, el estrés y el tiempo de espera en dependencias para tramitología diversa y requerimientos personales.</p>
                        </div>

                        <div className={styles.cardsGrid}>
                            <ServiceDetailCard title="Situación Fiscal" desc="Impresión oficial de Constancia de Situación Fiscal actualizada ante el SAT." />
                            <ServiceDetailCard title="Expedición de RFC" desc="Trámite de alta por primera vez e impresión de Cédula de Identificación Fiscal con Homoclave." />
                            <ServiceDetailCard title="Citas SAT Urgentes" desc="Agendamiento prioritario para firma electrónica y otros servicios recaudatorios." />
                            <ServiceDetailCard title="Actas de Nacimiento" desc="Búsqueda, certificación e impresión nacional de actas actualizadas." />
                            <ServiceDetailCard title="Actas Familiares" desc="Expedición de actas de Matrimonio y Divorcio certificadas en plataforma nacional." />
                            <ServiceDetailCard title="Actas de Defunción" desc="Trámite de actas de defunción oficiales para integración de expedientes de viudez." />
                            <ServiceDetailCard title="Constancias de Salud" desc="Impresión de certificados COVID-19 y constancias médicas requeridas." />
                            <ServiceDetailCard title="No Deudor Alimenticio" desc="Certificación de no inscripción en el padrón de deudores alimenticios." />
                            <ServiceDetailCard title="Antecedentes No Penales" desc="Trámite ágil de Constancia de Antecedentes No Penales (Federal o Estatal)." />
                            <ServiceDetailCard title="Pasaporte Mexicano" desc="Agendamiento exprés de citas para trámite de pasaportes ante la SRE." />
                            <ServiceDetailCard title="Licencias de Conducir" desc="Acompañamiento en renovación y expedición de licencias para automóviles." />
                            <ServiceDetailCard title="Opinión de Cumplimiento" desc="Descarga y descifrado de la opinión de cumplimiento fiscal en el portal del SAT." />
                            <ServiceDetailCard title="Permisos Vehiculares" desc="Gestión exclusiva de permisos de circulación sin placas para Guerrero." />
                            <ServiceDetailCard title="Tenencia y Refrendos" desc="Descarga del formato de pago de tenencia de CDMX y área metropolitana." />
                            <ServiceDetailCard title="Boletas Prediales" desc="Emisión y gestión de descarga de recibos y trámites locales de Catastro." />
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}

function ServiceDetailCard({ title, desc }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardIndicator}>
                <CheckCircle2 size={24} className={styles.indicatorIcon} />
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
            </div>
        </div>
    )
}
