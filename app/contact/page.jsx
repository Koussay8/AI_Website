'use client'

import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })
const MainButton = dynamic(() => import('@/framer/main-button'), { ssr: false })
const Badge = dynamic(() => import('@/framer/elements/badge'), { ssr: false })
const ContactCard = dynamic(() => import('@/framer/contact-card'), { ssr: false })
const FAQs = dynamic(() => import('@/framer/faq-s'), { ssr: false })

export default function ContactPage() {
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
        <Nav />
      </header>

      <main style={{ width: '100%', maxWidth: '1200px' }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          width: '100%',
          padding: '160px 40px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div className="section-header">
            <Badge GJdJmFCj5="Contact Us" />
            <h1 style={{ fontSize: '44px', fontWeight: 500, color: 'white' }}>Get In Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          {/* Contact Cards */}
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '54px',
            width: '100%'
          }}>
            <div style={{
              flex: '1',
              minWidth: '280px',
              maxWidth: '360px',
              padding: '32px',
              backgroundColor: 'rgb(16, 19, 28)',
              borderRadius: '16px',
              border: '1px solid rgba(216, 231, 242, 0.07)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(166, 218, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(166, 218, 255)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '8px' }}>Email Us</h3>
              <p style={{ color: 'rgba(213, 219, 230, 0.7)', fontSize: '14px', marginBottom: '16px' }}>We'll respond within 24 hours</p>
              <a href="mailto:landio@support.com" style={{ color: 'rgb(166, 218, 255)', textDecoration: 'none' }}>landio@support.com</a>
            </div>

            <div style={{
              flex: '1',
              minWidth: '280px',
              maxWidth: '360px',
              padding: '32px',
              backgroundColor: 'rgb(16, 19, 28)',
              borderRadius: '16px',
              border: '1px solid rgba(216, 231, 242, 0.07)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(166, 218, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(166, 218, 255)" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '8px' }}>Call Us</h3>
              <p style={{ color: 'rgba(213, 219, 230, 0.7)', fontSize: '14px', marginBottom: '16px' }}>Mon-Fri from 9am to 6pm</p>
              <a href="tel:+1234567890" style={{ color: 'rgb(166, 218, 255)', textDecoration: 'none' }}>+1 (234) 567-890</a>
            </div>

            <div style={{
              flex: '1',
              minWidth: '280px',
              maxWidth: '360px',
              padding: '32px',
              backgroundColor: 'rgb(16, 19, 28)',
              borderRadius: '16px',
              border: '1px solid rgba(216, 231, 242, 0.07)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(166, 218, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(166, 218, 255)" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '8px' }}>Visit Us</h3>
              <p style={{ color: 'rgba(213, 219, 230, 0.7)', fontSize: '14px', marginBottom: '16px' }}>Our headquarters</p>
              <span style={{ color: 'rgb(166, 218, 255)' }}>San Francisco, CA</span>
            </div>
          </div>

          <div className="border-bottom" />
          <div className="bg-shape" />
        </section>

        {/* Contact Form Section */}
        <section style={{
          position: 'relative',
          width: '100%',
          padding: '80px 40px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            padding: '48px',
            backgroundColor: 'rgb(16, 19, 28)',
            borderRadius: '24px',
            border: '1px solid rgba(216, 231, 242, 0.07)'
          }}>
            <h2 style={{ color: 'white', fontSize: '28px', marginBottom: '32px', textAlign: 'center' }}>
              Send us a Message
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'rgb(213, 219, 230)', fontSize: '14px' }}>
                    First Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: 'rgb(4, 7, 13)',
                      border: '1px solid rgba(216, 231, 242, 0.15)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'rgb(213, 219, 230)', fontSize: '14px' }}>
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: 'rgb(4, 7, 13)',
                      border: '1px solid rgba(216, 231, 242, 0.15)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'rgb(213, 219, 230)', fontSize: '14px' }}>
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: 'rgb(4, 7, 13)',
                    border: '1px solid rgba(216, 231, 242, 0.15)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'rgb(213, 219, 230)', fontSize: '14px' }}>
                  Message
                </label>
                <textarea 
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: 'rgb(4, 7, 13)',
                    border: '1px solid rgba(216, 231, 242, 0.15)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgb(166, 218, 255) 0%, rgb(120, 190, 255) 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'rgb(4, 7, 13)',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{
          position: 'relative',
          width: '100%',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div className="section-header">
            <Badge GJdJmFCj5="FAQ" />
            <h2 style={{ fontSize: '36px', fontWeight: 500, color: 'white' }}>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </div>

          <div style={{ marginTop: '54px', width: '100%', maxWidth: '800px' }}>
            <FAQs />
          </div>

          <div className="border-bottom" />
        </section>
      </main>

      {/* Footer */}
      <Footer style={{ width: '100%', maxWidth: '1200px' }} />
    </div>
  )
}
