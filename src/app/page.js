'use client';
import { useState } from 'react';

import Link from 'next/link';
import { ShieldCheck, TrendingUp, HeartPulse, HardDrive, PhoneCall, ArrowRight, CheckCircle2, ChevronRight, FileText, Layers, Briefcase, Search, FileSignature, Landmark, Star, Quote, HelpCircle } from 'lucide-react';
import Accordion from '../components/Accordion';
import styles from './page.module.css';

export default function Home() {
  const [formStatus, setFormStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setFormStatus('submitting');
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <main className={styles.main}>

      {/* HUB HERO SECTION */}
      <section className={styles.heroSection}>
        {/* Decorative Right-side Faded Image */}
        <div className={styles.heroBgImageWrapper}>
          <img
            src="https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Gemini_Generated_Image_fo4p3vfo4p3vfo4p.png"
            alt="Asesoría Legal y Administrativa"
            className={styles.heroBgImage}
            aria-hidden="true"
          />
        </div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLogoWrapper}>
              <img
                src="https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Picsart_26-03-07_12-57-34-298%20(1).png"
                alt="C&C Consultores Logo Principal"
                className={styles.heroMainLogo}
              />
            </div>
            <div className={styles.badge}>Consultoría y Gestoría Administrativa</div>
            <h1 className={styles.heroTitle}>
              La mejor solución para tu <span className={styles.textAccent}>retiro y pensión</span>
            </h1>
            <p className={styles.heroSubtitleLarge}>Otros trámites</p>
            <p className={styles.heroSub}>
              C&C Consultores te dará la mejor asesoría de pensión para que tu retiro te brinde la seguridad que necesitas, para ti y tu familia. Generamos la mejor estrategia de inversión para que tomes la mejor decisión.
            </p>
            <div className={styles.heroActions}>
              <Link href="/servicios" className={styles.btnPrimary}>
                Explorar Servicios <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/525514118922" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                WhatsApp Oficial
              </a>
            </div>

            {/* Hub Metrics / Trust points */}
            <div className={styles.trustBanner}>
              <div className={styles.trustItem}>
                <ShieldCheck className={styles.trustIcon} />
                <span>100% Seguro</span>
              </div>
              <div className={styles.trustItem}>
                <TrendingUp className={styles.trustIcon} />
                <span>100% Confiable</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle2 className={styles.trustIcon} />
                <span>100% Eficaz</span>
              </div>
              <div className={styles.trustItem}>
                <Search className={styles.trustIcon} />
                <span>Déjalo en manos de expertos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =========================================
        TRUST STRIP / LOGOS (New Section)
        =========================================
      */}
      <section className={styles.trustStrip}>
        <div className="container">
          <p className={styles.trustStripLabel}>Respaldados por la Ley y expertos en:</p>
          <div className={styles.trustLogos}>
            <div className={styles.trustLogoItem}>IMSS</div>
            <div className={styles.trustLogoItem}>INFONAVIT</div>
            <div className={styles.trustLogoItem}>AFORE</div>
            <div className={styles.trustLogoItem}>CONSAR</div>
            <div className={styles.trustLogoItem}>PRODECON</div>
          </div>
        </div>
      </section>

      {/* DASHBOARD SUMMARY: ALL SERVICES PREVIEW */}
      <section className={styles.dashboardSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestras Soluciones</h2>
            <p className={styles.sectionDesc}>
              Especialistas en la resolución de casos complejos ante el IMSS e Infonavit. Descubre cómo podemos apoyarte.
            </p>
          </div>

          <div className={styles.gridCards}>
            {/* Card 1: Pensiones */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconWrapper} ${styles.bgRedLight}`}>
                  <TrendingUp className={styles.iconRed} />
                </div>
                <h3 className={styles.cardTitle}>Pensiones</h3>
              </div>
              <p className={styles.cardText}>
                Estrategias integrales, proyecciones financieras para Modalidad 40 y acompañamiento legal paso a paso para maximizar el monto de tu pensión.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/servicios#pensiones" className={styles.cardLink}>
                  Saber más <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2: IMSS */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconWrapper} ${styles.bgSlateLight}`}>
                  <HeartPulse className={styles.iconSlate} />
                </div>
                <h3 className={styles.cardTitle}>Trámites IMSS</h3>
              </div>
              <p className={styles.cardText}>
                Recuperación de semanas cotizadas, unificación de números de seguro social, bajas, altas y corrección de datos patronales.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/servicios#imss" className={styles.cardLink}>
                  Saber más <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3: Infonavit / Afore */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconWrapper} ${styles.bgSlateLight}`}>
                  <Briefcase className={styles.iconSlate} />
                </div>
                <h3 className={styles.cardTitle}>Infonavit & Afore</h3>
              </div>
              <p className={styles.cardText}>
                Devolución de excedentes, estados de cuenta, localización de tu Afore y trámites orientados al retiro de tus saldos acumulados.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/servicios#infonavit" className={styles.cardLink}>
                  Saber más <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 4: Gestoría */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconWrapper} ${styles.bgSlateLight}`}>
                  <FileText className={styles.iconSlate} />
                </div>
                <h3 className={styles.cardTitle}>Gestoría General</h3>
              </div>
              <p className={styles.cardText}>
                Actas de nacimiento, RFC, antecedentes no penales, citas SAT y tramitología vehicular en CDMX y Estado de México.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/servicios#gestoria" className={styles.cardLink}>
                  Saber más <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.viewAllContainer}>
            <Link href="/servicios" className={styles.btnOutline}>
              <Layers size={18} /> Ver el catálogo completo de servicios
            </Link>
          </div>
        </div>
      </section >

      {/* ENGAGING "HOW IT WORKS" SECTION */}
      < section className={styles.howItWorksSection} >
        <div className="container">
          <div className={styles.howItWorksHeader}>
            <h2 className={styles.sectionTitle}>¿Cómo trabajamos tu caso?</h2>
            <p className={styles.sectionDesc}>
              Nuestro proceso está diseñado para darte certeza jurídica y tranquilidad en todo momento. Sin sorpresas.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>1</div>
              <Search className={styles.stepIcon} />
              <h4>Diagnóstico Profundo</h4>
              <p>Revisamos tu historial y semanas cotizadas. Evaluamos el estatus real de tu caso ante las dependencias.</p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>2</div>
              <FileSignature className={styles.stepIcon} />
              <h4>Estrategia a la Medida</h4>
              <p>Diseñamos el plan de acción legal o financiero exacto, con proyecciones claras, para obtener el máximo beneficio.</p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>3</div>
              <Landmark className={styles.stepIcon} />
              <h4>Gestión y Resolución</h4>
              <p>Nos encargamos del papeleo, las citas y el cabildeo hasta entregarte el resultado o resolución oficial a tu favor.</p>
            </div>
          </div>
        </div>
      </section >

      {/* TESTIMONIOS / CASOS DE ÉXITO */}
      < section className={styles.testimonialsSection} >
        <div className="container">
          <div className={styles.testimoHeader}>
            <h2 className={styles.sectionTitle}>Casos de Éxito</h2>
            <p className={styles.sectionDesc}>Lo que dicen nuestros clientes después de haber garantizado su futuro y tranquilidad con nosotros.</p>
          </div>

          <div className={styles.testimoGrid}>
            <div className={styles.testimoCard}>
              <Quote className={styles.quoteIcon} />
              <div className={styles.stars}>
                <Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} />
              </div>
              <p className={styles.testimoText}>
                "Estaba a punto de firmar mi pensión y me enteré por ellos que mi Afore tenía semanas no reconocidas. Recuperaron mi historial y mi pensión subió un 40%. Increíble asesoría."
              </p>
              <div className={styles.testimoAuthor}>
                <strong>Roberto Martínez</strong>
                <span>Trámite de Pensión</span>
              </div>
            </div>

            <div className={styles.testimoCard}>
              <Quote className={styles.quoteIcon} />
              <div className={styles.stars}>
                <Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} />
              </div>
              <p className={styles.testimoText}>
                "Tenía un problema gravísimo con mi Número de Seguro Social doble. Llevaba meses dando vueltas en el IMSS. En C&C Consultores me resolvieron todo el papeleo en un par de semanas sin que yo tuviera que estresarme."
              </p>
              <div className={styles.testimoAuthor}>
                <strong>Elena Gómez</strong>
                <span>Unificación de NSS</span>
              </div>
            </div>

            <div className={styles.testimoCard}>
              <Quote className={styles.quoteIcon} />
              <div className={styles.stars}>
                <Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} /><Star className={styles.starFill} />
              </div>
              <p className={styles.testimoText}>
                "Las proyecciones que hacen son exactas. Me demostraron con números cuánto tenía que invertir en Modalidad 40 y en qué mes exacto iba a recuperar mi dinero. Transparencia total."
              </p>
              <div className={styles.testimoAuthor}>
                <strong>Javier Ruiz</strong>
                <span>Modalidad 40</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* QUICK ABOUT / CORPORATE PREVIEW */}
      < section className={styles.corporateSection} >
        <div className="container">
          <div className={styles.corporateGrid}>
            <div className={styles.corpTextSide}>
              <h2>C&C Consultores</h2>
              <div className={styles.accentLine}></div>
              <p className={styles.leadText}>
                Más que un despacho, somos tu aliado para alcanzar la tranquilidad que mereces al finalizar tu vida laboral.
              </p>
              <p>
                Tratamos cada caso de forma personalizada. No aplicamos "recetas" genéricas, porque sabemos que cada historial es único. Traducimos lo complejo a un lenguaje sencillo para que siempre tomes decisiones informadas.
              </p>
              <Link href="/nosotros" className={`${styles.btnPrimary} ${styles.mt30}`}>
                Conoce Nuestra Historia
              </Link>
            </div>

            <div className={styles.corpStatsSide}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Años de <br />Experiencia</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Certeza <br />Legal</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* FAQ CORNER */}
      < section className={styles.faqSection} >
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
            <p className={styles.sectionDesc}>Resolvemos las dudas más comunes sobre pensiones y trámites oficiales.</p>
          </div>

          <div className={styles.faqContainer}>
            <Accordion title="¿Cuánto cobra C&C Consultores por sus servicios?">
              Cobraremos en función de la complejidad de tu caso. Sin embargo, nuestro <strong>Diagnóstico Inicial</strong> tiene un costo muy accesible y en muchos trámites no cobramos honorarios fuertes hasta que tu resolución haya sido aprobada.
            </Accordion>
            <Accordion title="¿Es seguro darles mis datos personales e historial?">
              Totalmente. Manejamos contratos de confidencialidad estrictos y actuamos apegados a la ley. Tus datos solo se utilizan para armar tus expedientes frente a dependencias oficiales.
            </Accordion>
            <Accordion title="¿Qué pasa si el IMSS ya me dio una negativa de pensión?">
              ¡Aún hay esperanza! Nuestro equipo legal es especialista en analizar las razones del Instituto y, si la ley nos avala, procedemos a impugnar la resolución para revertirla a tu favor.
            </Accordion>
            <Accordion title="¿Tienen oficinas físicas a donde pueda acudir?">
              Sí, agenda una cita a través de nuestros canales de contacto para recibirte en nuestras instalaciones de manera privada y segura.
            </Accordion>
          </div>
        </div>
      </section>

      {/* 
        =========================================
        FINAL CTA STRIP (New Section)
        =========================================
      */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <div className={styles.finalCtaContent}>
              <h2>¿Listo para tomar el control de tu futuro patrimonial?</h2>
              <p>No dejes tus derechos laborales al azar. Un experto de C&C Consultores está listo para analizar tu caso hoy mismo.</p>
            </div>
            <div className={styles.finalCtaActions}>
              <a href="https://wa.me/525514118922" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsApp}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  Chatear por WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FOOTER */}
      <section className={styles.contactSection} id="contacto">
        <div className="container">
          <div className={styles.contactGrid}>

            <div className={styles.contactTextWrapper}>
              <img
                src="https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Picsart_26-03-07_12-57-34-298%20(1).png"
                alt="C&C Consultores Logo Footer"
                className={styles.footerLogo}
              />
              <h3>Inicia tu Trámite Hoy Mismo</h3>
              <p>El mejor momento para asegurar tu futuro o regularizar tu historial es ahora. Déjanos tus datos y un estratega experto te brindará asesoría sin compromiso.</p>

              <div className={styles.contactHighlights}>
                <div className={styles.highlightItem}>
                  <CheckCircle2 className={styles.iconRed} />
                  <span>Respuesta rápida y personalizada</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle2 className={styles.iconRed} />
                  <span>Trato humano y cálido</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle2 className={styles.iconRed} />
                  <span>Absoluta confidencialidad de tus datos</span>
                </div>
              </div>
            </div>

            <div className={styles.contactFormWrapper}>
              <p className={styles.formDesc}>Completa este breve formulario:</p>

              {formStatus === 'success' ? (
                <div style={{ padding: '24px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <CheckCircle2 color="var(--color-primary)" size={48} style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '8px' }}>¡Gracias por contactarnos!</h4>
                  <p style={{ color: '#CBD5E1' }}>Hemos recibido tu información con éxito. Un estratega experto de C&C Consultores se pondrá en contacto contigo muy pronto a través de WhatsApp o llamada.</p>
                </div>
              ) : (
                <form action="https://formspree.io/f/mbdzoeab" method="POST" className={styles.quickForm} onSubmit={handleFormSubmit}>
                  <input type="text" name="name" placeholder="Nombre completo" required disabled={formStatus === 'submitting'} />
                  <input type="tel" name="phone" placeholder="Teléfono celular" required disabled={formStatus === 'submitting'} />
                  <select name="service" required disabled={formStatus === 'submitting'}>
                    <option value="">Servicio principal de interés...</option>
                    <option value="pensiones">Gestión de Pensiones y Retiro</option>
                    <option value="imss">Aclaraciones y Trámites IMSS</option>
                    <option value="infonavit">Afore e Infonavit</option>
                    <option value="gestoria">Trámites Documentales Varios</option>
                  </select>
                  <button type="submit" className={styles.btnPrimaryFull} disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Enviando...' : 'Solicitar Llamada Inmediata'}
                  </button>
                  {formStatus === 'error' && <p style={{ color: 'var(--color-primary)', marginTop: '8px', fontSize: '0.9rem' }}>Hubo un problema al enviar. Por favor inténtalo de nuevo.</p>}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
