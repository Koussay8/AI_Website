'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
// Import SVG icons from Framer chunks
import { stdin_default as SparkleIcon } from '@/framer/chunks/chunk-OCDCCSSV'
import { stdin_default as StarIcon } from '@/framer/chunks/chunk-BEVVEG7Y'
import {
  stdin_default as OpenAIIcon,
  stdin_default2 as StackIcon,
  stdin_default3 as FigmaIcon,
  stdin_default4 as AddressBookIcon,
  stdin_default7 as NotionIcon
} from '@/framer/chunks/chunk-FUWIJPPX'
import { stdin_default as XLogoIcon } from '@/framer/chunks/chunk-PQK5NHI5'
import {
  stdin_default as InstagramIcon,
  stdin_default2 as FacebookIcon
} from '@/framer/chunks/chunk-4ZOEQ4T3'
// Import more icons for feature cards
import {
  stdin_default as UsersIcon,
  stdin_default2 as ClockCountdownIcon,
  stdin_default3 as CheckFatIcon,
  stdin_default4 as CurrencyCircleDollarIcon,
  stdin_default5 as ArrowCounterClockwiseIcon
} from '@/framer/chunks/chunk-ZM3IMGF7'
import { stdin_default as ShapesIcon } from '@/framer/chunks/chunk-GD2KCKTC'
import InfiniteScrollCarousel from '@/components/InfiniteScrollCarousel'

// Inline Phosphor SVG icon components for integrations grid
const FramerLogoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M206,104V40a6,6,0,0,0-6-6H56a6,6,0,0,0-4,10.48L112.22,98H56a6,6,0,0,0-6,6v64a6,6,0,0,0,1.76,4.24l72,72A6,6,0,0,0,134,240V174h66a6,6,0,0,0,4-10.48L143.78,110H200A6,6,0,0,0,206,104Zm-21.78,58H128a6,6,0,0,0-6,6v57.51l-60-60V110h63.72ZM194,98H130.28L71.78,46H194Z" />
  </svg>
)
const PinterestLogoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M222,112c0,22.05-7.7,42.19-21.68,56.73C187.32,182.25,169.71,190,152,190c-19.42,0-31.55-7.07-38.63-13.64l-11.53,49A6,6,0,0,1,96,230a5.89,5.89,0,0,1-1.37-.16,6,6,0,0,1-4.47-7.21l32-136a6,6,0,1,1,11.68,2.74L116.75,162c2.8,4.33,12.46,16,35.25,16,28.51,0,58-24.69,58-66A74,74,0,1,0,71.9,149a6,6,0,1,1-10.39,6A86,86,0,1,1,222,112Z" />
  </svg>
)
const GoogleChromeLogoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,12a90,90,0,0,1,77.33,44H128a46.07,46.07,0,0,0-44.93,36.17L56.91,72.87A89.91,89.91,0,0,1,128,38Zm34,90a34,34,0,1,1-34-34A34,34,0,0,1,162,128ZM38,128A89.4,89.4,0,0,1,49.5,84l38.66,67c.06.1.13.18.19.27A45.94,45.94,0,0,0,142,171.83l-26.17,45.34A90.13,90.13,0,0,1,38,128Zm91.16,90,38.68-67,.21-.41A45.9,45.9,0,0,0,159,94h52.37a90,90,0,0,1-82.16,124Z" />
  </svg>
)
const PaypalLogoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M218.54,94.77A53.84,53.84,0,0,0,198,78.66,54,54,0,0,0,144,26H84A14,14,0,0,0,70.42,36.6l-36,144A14,14,0,0,0,48,198H78.07l-3.65,14.6A14,14,0,0,0,88,230h31.5a14,14,0,0,0,13.58-10.6l9-35.88A2,2,0,0,1,144,182h32a54,54,0,0,0,42.56-87.23ZM79.51,186H48a2,2,0,0,1-1.94-2.49l36-144A2,2,0,0,1,84,38h60a42,42,0,0,1,41.69,36.87A54.57,54.57,0,0,0,176,74H120a14,14,0,0,0-13.59,10.6l-25,99.89A2,2,0,0,1,79.51,186ZM185.37,87.05c-.18,1-.39,2.09-.65,3.14A41.94,41.94,0,0,1,144,122H109.44l8.62-34.48A2,2,0,0,1,120,86h56A42.43,42.43,0,0,1,185.37,87.05Zm31.35,51.14A41.94,41.94,0,0,1,176,170H144a14,14,0,0,0-13.58,10.6l-9,35.89a2,2,0,0,1-1.94,1.51H88a2,2,0,0,1-1.94-2.49l20-80a2,2,0,0,1,2-1.52h36a53.92,53.92,0,0,0,52.38-40.9c.14-.55.25-1.1.36-1.64a42.06,42.06,0,0,1,20,46.73Z" />
  </svg>
)
const CloudIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Z" />
  </svg>
)
const StripeLogoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M166,152c0,16.54-17.05,30-38,30s-38-13.46-38-30a6,6,0,0,1,12,0c0,9.76,11.91,18,26,18s26-8.24,26-18c0-11.21-10.7-15.1-28.33-20.18-15.89-4.58-33.89-9.77-33.89-27.82,0-17.1,15.57-30,36.22-30,15,0,27.74,6.88,33.34,18a6,6,0,0,1-10.71,5.42C147.08,90.36,138.41,86,128,86c-13.81,0-24.22,7.74-24.22,18,0,8.41,9.52,11.76,25.21,16.29C145.48,125,166,131,166,152ZM222,48V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z" />
  </svg>
)

// Dynamic import for particles (SSR disabled for canvas)
const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), { ssr: false })

// Dynamic imports for Framer components to avoid SSR issues
const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })
const LogoBox = dynamic(() => import('@/framer/logo-box'), { ssr: false })
const Availability = dynamic(() => import('@/framer/availability'), { ssr: false })
const MainButton = dynamic(() => import('@/framer/main-button'), { ssr: false })
const Badge = dynamic(() => import('@/framer/elements/badge'), { ssr: false })
const SocialMedia = dynamic(() => import('@/framer/elements/social-media'), { ssr: false })
const FeatureCard1 = dynamic(() => import('@/framer/cards/feature-card-1'), { ssr: false })
const FeatureCard2 = dynamic(() => import('@/framer/cards/feature-card-2'), { ssr: false })
const FeatureCard3 = dynamic(() => import('@/framer/cards/feature-card-3'), { ssr: false })
const BenefitCard1 = dynamic(() => import('@/framer/cards/benefit-card-1'), { ssr: false })
const BenefitCard2 = dynamic(() => import('@/framer/cards/benefit-card-2'), { ssr: false })
const BenefitCard = dynamic(() => import('@/framer/benefit-card'), { ssr: false })
const ServiceCard1 = dynamic(() => import('@/framer/service-card-1'), { ssr: false })
const ServiceCard2 = dynamic(() => import('@/framer/service-card-2'), { ssr: false })
const StrategyCard = dynamic(() => import('@/framer/strategy-card'), { ssr: false })
const Process = dynamic(() => import('@/framer/process'), { ssr: false })
const Testimonials = dynamic(() => import('@/framer/testimonials'), { ssr: false })
const ReviewCard = dynamic(() => import('@/framer/review-card'), { ssr: false })
const Pricing = dynamic(() => import('@/framer/pricing'), { ssr: false })
const FAQ = dynamic(() => import('@/framer/faq-s'), { ssr: false })
const CTASection = dynamic(() => import('@/framer/cta-section'), { ssr: false })
const Logo = dynamic(() => import('@/framer/logo'), { ssr: false })
const IconCard = dynamic(() => import('@/framer/icon-card'), { ssr: false })

// Animation variants for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

// Client logos for Trusted By section
const clientLogos = [
  'https://framerusercontent.com/images/otv1rEDn2X7h8TFtKPCksQmAEKQ.svg',
  'https://framerusercontent.com/images/rrRoFs4icQtustYbIGm5r5DXREI.svg',
  'https://framerusercontent.com/images/hhTRf8RciR9bakkAgIckAkEiQM.svg',
  'https://framerusercontent.com/images/1ph1389RD4RtUDEfqVhWbujyF7s.svg',
  'https://framerusercontent.com/images/Yn3MOOL9rTXhK9U8MLvSnEoNP8.svg',
]

// Review profile images
const reviewImages = [
  'https://framerusercontent.com/images/mCkhYgyE0LSy9RJ4nVmmGTpAjLA.jpg',
  'https://framerusercontent.com/images/BgsxdPJJZ3faakDHp1W2WcB8CoM.jpg',
  'https://framerusercontent.com/images/XeoHxv0ErFoyqieN2PppKnGRd2o.jpg',
  'https://framerusercontent.com/images/YGV3hSM1KkFRZxZ0JDeOT7ry7u4.jpg',
  'https://framerusercontent.com/images/G1bC6MQnKLl8c7ZyjwpJlVGuw.jpg',
  'https://framerusercontent.com/images/2brzgXS5fJHHMvAH83vgl5m8KTI.jpg',
]

export default function HomePage() {
  return (
    <div style={{
      backgroundColor: 'rgb(4, 7, 13)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Navigation */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(8, 9, 10, 0.75)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.07)'
      }}>
        <Nav style={{ width: '100%', maxWidth: '1350px' }} />
      </header>

      <main style={{ width: '100%' }}>
        {/* Hero Section - Exact Framer dimensions */}
        <section id="hero" style={{
          position: 'relative',
          width: '100%',
          minHeight: '990px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '160px',
          paddingBottom: '80px',
          overflow: 'hidden'
        }}>
          {/* Background Video Container - Exact Framer values */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            filter: 'grayscale(1)',
            opacity: 0.4,
            zIndex: 1
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%'
              }}
            >
              <source src="https://framerusercontent.com/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Particles Animation - Full hero coverage */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            pointerEvents: 'none',
            opacity: 0.5
          }}>
            <ParticlesBackground id="hero-particles" />
          </div>

          {/* Radial Gradient Overlay - Exact Framer values */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'radial-gradient(75% 64% at 50% 50%, rgba(255, 255, 255, 0) 17.5676%, rgb(4, 7, 13) 100%)',
            zIndex: 3,
            pointerEvents: 'none'
          }} />

          {/* Bottom glow effect */}
          <div style={{
            position: 'absolute',
            top: '75%',
            bottom: '-250px',
            left: '23%',
            right: '23%',
            background: 'radial-gradient(50% 50% at 50% 50%, rgb(213, 219, 230) 0%, rgba(4, 7, 13, 0) 100%)',
            opacity: 0.15,
            zIndex: 4,
            pointerEvents: 'none'
          }} />




          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              position: 'relative',
              marginTop: '-52px',
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '44px',
              maxWidth: '1050px',
              padding: '0 40px'
            }}
          >
            <motion.div variants={fadeInUp}>
              <LogoBox style={{ width: '80px', height: '80px' }} />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <Availability
                  variant="BZCZ03agn"
                  jn909WTNI="VEXTRA TECH: ASSISTANT VIRTUEL DE CHOIX"
                />

                <h1 style={{
                  fontSize: 'clamp(48px, 7vw, 88px)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: '-0.04em',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  Votre <span className="hero-title-italic">Assistant Virtuel</span> de Choix
                </h1>

                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6em',
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                  color: 'rgb(213, 219, 230)'
                }}>
                  Transformez votre entreprise avec l'intelligence artificielle. Des résultats mesurables, une disponibilité 24/7.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <MainButton
                  className="hero-main-button-no-icon"
                  variant="u8HXU5hd9"
                  WygjbYACO="Démarrer maintenant"
                  ypOX2jdFN="/contact"
                  pkd7Pcy3s={false}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#founder-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '20px',
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('founder-note')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ color: 'rgba(213, 219, 230, 0.5)', fontSize: '20px' }}
            >
              ↓
            </motion.div>
          </motion.a>
        </section>

        {/* Founder Note Section */}
        <motion.section
          id="founder-note"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgb(4, 7, 13)',
            borderRadius: '50px 50px 0 0'
          }}
        >
          <div style={{ maxWidth: '744px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <Badge GJdJmFCj5="OFFRE VEXTRA" v7319IK7C={StarIcon} />

            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: 400,
              lineHeight: '1.4em',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: 'white'
            }}>
              Ce que <span className="hero-title-italic">Vextra Tech</span> peut faire pour vous : Précision, Économies et <span className="hero-title-italic">Personnalisation</span>.
            </h2>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/founder-koussay.png"
                alt="Founder"
                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <p style={{ fontSize: '16px', color: 'rgb(213, 219, 230)' }}>
                Co-founder &amp; AI Strategy Lead
              </p>
            </div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          id="benefits"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <motion.div variants={fadeInUp} className="section-header">
              <Badge GJdJmFCj5="BENEFITS" v7319IK7C={SparkleIcon} />
              <h2>Pourquoi nous choisir ?</h2>
              <p>Précision, économies et personnalisation pour votre entreprise</p>
            </motion.div>

            <motion.div variants={staggerContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', width: '100%', alignItems: 'flex-start' }}>
              <motion.div variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex' }}>
                <BenefitCard2
                  variant="NlXlWXy00"
                  jxpw6yvEh="Précision et Constance"
                  I0KtDm67s="L'assistant virtuel maintient un haut niveau de précision et de constance dans l'exécution des tâches."
                  style={{ height: '347px', width: '100%' }}
                />
              </motion.div>
              <motion.div variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px' }}>
                <FeatureCard3
                  variant="eNPbONQCx"
                  fTw5h1r00="Économies"
                  A5s7EgHee="Les entreprises peuvent réduire leurs coûts opérationnels en automatisant les tâches et en améliorant l'efficacité."
                  style={{ height: '347px', width: '100%' }}
                />
              </motion.div>
              <motion.div variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px' }}>
                <BenefitCard1
                  variant="deVeoE8qx"
                  zzm203ZdU="Personnalisation"
                  Z9AfFpsg3="L'assistant virtuel offre des recommandations et services personnalisés, adaptés à vos besoins spécifiques."
                  style={{ height: '347px', width: '100%' }}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <motion.div variants={fadeInUp} className="section-header">
              <Badge GJdJmFCj5="SERVICES" v7319IK7C={SparkleIcon} />
              <h2>Solutions d'Automatisation</h2>
              <p>14 Solutions Pour Automatiser & Développer votre activité</p>
            </motion.div>

            <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <ServiceCard1
                  O25SCzcZD="CV Profiler"
                  wcFdefe99="Recrutez 3x plus vite. L'IA analyse, trie et matche vos CVs."
                  bUyyfQp4l={true}
                  style={{ flex: '1 1 300px' }}
                />
                <ServiceCard2
                  VfZk4rpBP="Agent Téléphonique IA 24/7"
                  SM_hvNd8b="Réceptionniste IA qui qualifie et prend des RDV. Dupliquez votre voix pour une présence continue."
                  hYZ_ToDgH={true}
                  style={{ flex: '2 1 400px' }}
                />
              </motion.div>

              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <FeatureCard2
                  LEnKfYtg5="Chatbot IA Multi-Canal"
                  xEl67eLKG="Sur votre site, Instagram, WhatsApp ou Messenger. Disponible 24h/24 pour répondre à vos clients."
                  style={{ flex: '1 1 300px', height: '400px' }}
                />
                <div style={{ flex: '1 1 300px' }}>
                  <FeatureCard1
                    hNJNKCWYt="Qualification de Dossiers IA"
                    C8n5LQRZ5="Qualifiez les dossiers avant la première visite. Vérification d'éligibilité automatique."
                    style={{ height: '400px', width: '100%' }}
                  />
                </div>
                <StrategyCard
                  variant="yVZnp15uS"
                  jxpw6yvEh="Emailing IA Personnalisé"
                  I0KtDm67s="Emails hyper-personnalisés qui convertissent vraiment. Relances et suivis automatiques."
                  style={{ flex: '1 1 300px', minWidth: '300px', height: '400px' }}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <motion.div variants={fadeInUp} className="section-header">
              <Badge GJdJmFCj5="FEATURES" v7319IK7C={SparkleIcon} />
              <h2>Toutes nos fonctionnalités</h2>
              <p>Des solutions clé en main, déployées en 2-4 semaines</p>
            </motion.div>

            <motion.div variants={staggerContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', width: '100%' }}>
              {[
                { title: 'Site Web Premium', desc: '1ère page Google. SEO optimisé, espace client, e-commerce.', icon1: FigmaIcon, icon2: NotionIcon },
                { title: 'Automatisation RDV', desc: 'Libérez 10h par semaine. RDV, rappels, tâches automatiques.', icon1: ClockCountdownIcon, icon2: CheckFatIcon },
                { title: 'Calculateur Devis', desc: 'Pré-qualifiez et générez des devis en 30 secondes.', icon1: CurrencyCircleDollarIcon, icon2: StackIcon },
                { title: 'Visualiseur 3D', desc: 'Plans en visites virtuelles époustouflantes pour l\'architecture.', icon1: ShapesIcon, icon2: SparkleIcon },
                { title: 'Vidéos Marketing IA', desc: 'Pubs virales sans équipe vidéo. Technologies Veo 4K.', icon1: UsersIcon, icon2: StarIcon },
                { title: 'Agent WhatsApp B2B', desc: 'Commandes WhatsApp transformées en bons de commande fournisseur.', icon1: AddressBookIcon, icon2: ArrowCounterClockwiseIcon },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px' }}>
                  <BenefitCard
                    variant="ioJ9WwnlF"
                    tXEKlN7zT={item.title}
                    jlPwWcQIY={item.desc}
                    icon1={item.icon1}
                    icon2={item.icon2}
                    style={{ width: '100%' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* Process Section */}
        <motion.section
          id="process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <div className="section-header">
              <Badge GJdJmFCj5="PROCESS" v7319IK7C={StarIcon} />
              <h2>De 0 à 10x en 6 mois</h2>
              <p>Voici exactement ce qui va se passer après votre décision aujourd'hui</p>
            </div>

            <Process
              variant="qm6JrJUbt"
              ffy1TjphS="row"
              A3R33WBVq={true}
              lwUnNPKD9="Quick Win"
              JObVnYdT5="Premiers résultats visibles. Votre agent IA répond aux premières demandes. Premier lead qualifié, temps de réponse divisé par 10."
              rXU1jvem4="Compound & Advantage"
              yICy65UuN="L'IA apprend et s'améliore (Productivité +30%). Vous servez plus de clients que vos concurrents (Leads x2, Service 24/7)."
              Renab5ndj="10x Transformation"
              Gp0XQ20hc="Transformation complète. Votre business tourne pendant que vous dormez. Croissance exponentielle et leadership du marché."
              style={{ width: '100%', maxWidth: '1200px' }}
            />
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* Success Stories Section */}
        <motion.section
          id="clients"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
            <div className="section-header">
              <Badge GJdJmFCj5="OUR CLIENTS" v7319IK7C={StarIcon} />
              <h2>Ils nous font confiance</h2>
              <p>Découvrez comment les entreprises transforment leur activité</p>
            </div>

            <Testimonials
              variant="nmKfOmFnb"
              style={{ width: '100%', maxWidth: '990px' }}
            />
          </div>
          <div className="border-bottom" />
        </motion.section>

        {/* Integrations Section */}
        <motion.section
          id="integrations"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <motion.div variants={fadeInUp} className="section-header">
              <Badge GJdJmFCj5="INTEGRATIONS" v7319IK7C={SparkleIcon} />
              <h2>Intégrations Fluides</h2>
              <p>Connectez vos outils favoris sans effort</p>
            </motion.div>

            {/* Integration Icons Grid - 3 rows of scrolling carousels in dark card */}
            <motion.div
              variants={fadeInUp}
              style={{
                width: '100%',
                maxWidth: '600px',
                backgroundColor: 'rgb(4, 7, 13)',
                borderRadius: '16px',
                boxShadow: 'inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)',
                padding: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Row 1 - scrolls right */}
              <InfiniteScrollCarousel speed={30} direction="right">
                {[FacebookIcon, PinterestLogoIcon, FramerLogoIcon, XLogoIcon].map((icon, i) => (
                  <div key={i} style={{ width: '54px', height: '52px', flexShrink: 0 }}>
                    <IconCard icon={icon} style={{ width: '54px', height: '52px' }} />
                  </div>
                ))}
              </InfiniteScrollCarousel>

              {/* Row 2 - scrolls left */}
              <InfiniteScrollCarousel speed={30} direction="left">
                {[AddressBookIcon, StackIcon, InstagramIcon, GoogleChromeLogoIcon].map((icon, i) => (
                  <div key={i} style={{ width: '54px', height: '52px', flexShrink: 0 }}>
                    <IconCard icon={icon} style={{ width: '54px', height: '52px' }} />
                  </div>
                ))}
              </InfiniteScrollCarousel>

              {/* Row 3 - scrolls right */}
              <InfiniteScrollCarousel speed={30} direction="right">
                {[PaypalLogoIcon, CloudIcon, NotionIcon, StripeLogoIcon].map((icon, i) => (
                  <div key={i} style={{ width: '54px', height: '52px', flexShrink: 0 }}>
                    <IconCard icon={icon} style={{ width: '54px', height: '52px' }} />
                  </div>
                ))}
              </InfiniteScrollCarousel>
            </motion.div>

            {/* Integration Quote */}
            <motion.div variants={fadeInUp} style={{ maxWidth: '600px', textAlign: 'center' }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6em',
                color: 'rgba(213, 219, 230, 0.7)',
                fontStyle: 'italic'
              }}>
                "Notre automatisation IA se connecte à votre stack pour créer un flux de travail unifié et intelligent"
              </p>
            </motion.div>
          </div>
          <div className="border-bottom" />
        </motion.section>

        {/* Reviews Section */}
        <motion.section
          id="reviews"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <motion.div variants={fadeInUp} className="section-header">
              <Badge GJdJmFCj5="REVIEWS" v7319IK7C={StarIcon} />
              <h2><span className="gradient-text">Approuvé par les Visionnaires</span></h2>
              <p>Des résultats concrets pour des entreprises réelles</p>
            </motion.div>

            <motion.div variants={staggerContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', width: '100%' }}>
              {[
                { name: 'Cabinet Dentaire Lyon', role: 'Santé', review: '"Nos no-shows ont chuté de 70%. L\'IA filtre parfaitement les vrais patients. Je recommande à 100%."', img: reviewImages[0] },
                { name: 'Plombier Indépendant', role: 'Artisanat', review: '"Je ne rate plus un seul appel même quand je suis sous une baignoire. Un investissement rentabilisé en 1 mois."', img: reviewImages[1] },
                { name: 'Agence Immobilière Paris', role: 'Immobilier', review: '"40% de temps gagné. Mes agents se concentrent sur les visites, pas les questions basiques."', img: reviewImages[2] },
                { name: 'Start-up Tech', role: 'SaaS', review: '"Nous avons automatisé tout notre support niveau 1. Nos équipes sont ravies et les clients ont des réponses instantanées."', img: reviewImages[3] },
                { name: 'E-commerçant', role: 'Retail', review: '"La qualification automatique des leads nous a permis de doubler notre taux de conversion."', img: reviewImages[4] },
                { name: 'Cabinet d\'Avocats', role: 'Juridique', review: '"La prise de rendez-vous est maintenant entièrement gérée par l\'IA. Un gain de temps considérable."', img: reviewImages[5] },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px' }}>
                  <ReviewCard
                    eh4HJ5FRx={item.name}
                    uYNBzKkX9={item.role}
                    whgBZJChm={item.review}
                    UJrGavXuk={item.img}
                    style={{ width: '100%' }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Logo Ticker - inside Reviews section like Framer target */}
            <div style={{
              width: '100%',
              maxWidth: '1100px',
              overflow: 'hidden',
              position: 'relative',
              marginTop: '20px'
            }}>
              <Marquee speed={40} gradient={false} pauseOnHover={true}>
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={i} style={{
                    padding: '0 50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '81px'
                  }}>
                    <img
                      src={logo}
                      alt="Client Logo"
                      style={{ width: 'auto', height: '27px', opacity: 0.6, filter: 'brightness(0) invert(0.85)' }}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          id="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            <div className="section-header">
              <Badge GJdJmFCj5="PRICING" v7319IK7C={SparkleIcon} />
              <h2>L'offre Ultime</h2>
              <p>Investissement Annuel - Garantie de satisfaction 30 jours</p>
            </div>

            <div style={{ width: '100%' }}>
              <Pricing
                variant="AmVMc2HPZ"
                planName="Offre Ultime"
                monthlyPrice="1000€"
                priceSuffixText="/ mois"
                point1="Site Web Premium + SEO"
                point2="Agent Téléphonique IA 24/7"
                point3="Chatbot Multi-Canal"
                point4="Automatisation RDV & Tâches"
                point5="Génération de Leads & Pubs IA"
                point6="Support Prioritaire & Stratégie"
                point7="Garantie Satisfaction 30 jours"
                btnText="Je veux passer à l'IA"
                btnLink="/contact"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          style={{
            position: 'relative',
            width: '100%',
            padding: '0px 40px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FAQ variant="ropW4voL6" style={{ width: '100%' }} />
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          id="comparison"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            position: 'relative',
            width: '100%',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}>
            <motion.div variants={fadeInUp} className="section-header">
              <Badge GJdJmFCj5="COMPARAISON" v7319IK7C={SparkleIcon} />
              <h2>Pourquoi nous choisir ?</h2>
              <p>Voyez comment nous nous démarquons face à la concurrence</p>
            </motion.div>

            <motion.div variants={staggerContainer} style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              {/* Our Card */}
              <motion.div variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px' }}>
                <div style={{ marginBottom: '8px', height: '62px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Logo />
                </div>
                <div style={{
                  padding: '24px 30px',
                  borderRadius: '16px',
                  boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset',
                  overflow: 'hidden'
                }}>
                  {[
                    'Mise en place rapide avec workflows IA prêts',
                    'Conçu pour évoluer et s\'adapter avec vous',
                    'Analyses en temps réel pilotées par l\'IA',
                    'Automatise les tâches, réduit les coûts',
                    'Support expert + accompagnement IA'
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 0' }}>
                        <svg width="16" height="16" viewBox="0 0 256 256" fill="rgb(166, 218, 255)"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" /></svg>
                        <span style={{ color: 'rgb(213, 219, 230)' }}>{item}</span>
                      </div>
                      {i < 4 && <div style={{ height: '1px', backgroundColor: 'rgba(216, 231, 242, 0.07)' }} />}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Others Card */}
              <motion.div variants={fadeInUp} style={{ flex: '1 1 300px', minWidth: '300px' }}>
                <div style={{ marginBottom: '8px', height: '62px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="rgb(213, 219, 230)"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '20px', color: 'white' }}>Autres</span>
                </div>
                <div style={{
                  padding: '24px 30px',
                  borderRadius: '16px',
                  boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset',
                  overflow: 'hidden'
                }}>
                  {[
                    'Exécution plus lente et configuration manuelle',
                    'Nécessite des mises à jour manuelles',
                    'Rapports limités ou retardés',
                    'Coûts de main-d\'\u0153uvre plus élevés',
                    'Support générique ou inexistant'
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 0', opacity: 0.6 }}>
                        <svg width="16" height="16" viewBox="0 0 256 256" fill="rgb(213, 219, 230)"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>
                        <span style={{ color: 'rgb(213, 219, 230)' }}>{item}</span>
                      </div>
                      {i < 4 && <div style={{ height: '1px', backgroundColor: 'rgba(216, 231, 242, 0.07)' }} />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="border-bottom" />
          <div className="bg-shape" />
        </motion.section>

        {/* CTA Section */}
        <section style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <CTASection variant="ec8cBy25t" style={{ width: '100%' }} />
        </section>
      </main>

      {/* Footer */}
      <Footer style={{ width: '100%', maxWidth: '1200px' }} />
    </div>
  )
}
