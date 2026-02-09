'use client'

import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })

export default function TermsPage() {
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
        <section style={{
          width: '100%',
          padding: '200px 40px 100px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '1000px', width: '100%' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h1 style={{
                fontSize: '44px',
                fontWeight: 500,
                lineHeight: 1.2,
                color: 'white',
                marginBottom: '24px'
              }}>
                Terms Of Service
              </h1>
              <p style={{ fontSize: '20px', opacity: 0.8, color: 'rgb(213, 219, 230)' }}>
                Last updated on 23 Jan 2025
              </p>
            </div>

            {/* Separator */}
            <div style={{ 
              height: '3px', 
              background: 'linear-gradient(90deg, transparent, rgba(166, 218, 255, 0.5), transparent)',
              margin: '24px 0'
            }} />

            {/* Content */}
            <div style={{ color: 'rgb(213, 219, 230)', lineHeight: '1.6em', fontSize: '16px' }}>
              <p style={{ marginBottom: '24px' }}>
                Welcome to Landio ("we" or "us"). These Terms of Service govern your use of our website and related services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <ol style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>1. Acceptance of Terms</li>
                <li style={{ marginBottom: '8px' }}>2. Use of Services</li>
                <li style={{ marginBottom: '8px' }}>3. User Accounts</li>
                <li style={{ marginBottom: '8px' }}>4. Intellectual Property</li>
                <li style={{ marginBottom: '8px' }}>5. Payment Terms</li>
                <li style={{ marginBottom: '8px' }}>6. Limitation of Liability</li>
                <li style={{ marginBottom: '8px' }}>7. Termination</li>
                <li style={{ marginBottom: '8px' }}>8. Governing Law</li>
                <li style={{ marginBottom: '8px' }}>9. Contact Us</li>
              </ol>

              {/* Topics */}
              {[
                {
                  title: '1. Acceptance of Terms',
                  content: `By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
                },
                {
                  title: '2. Use of Services',
                  content: `You agree to use our services only for lawful purposes and in accordance with these terms. You must not:\n• Use the services in any way that violates applicable laws\n• Attempt to interfere with or disrupt the services\n• Access data not intended for you`
                },
                {
                  title: '3. User Accounts',
                  content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`
                },
                {
                  title: '4. Intellectual Property',
                  content: `All content, features, and functionality of our services are owned by Landio and are protected by international copyright, trademark, and other intellectual property laws.`
                },
                {
                  title: '5. Payment Terms',
                  content: `If you subscribe to our paid services, you agree to pay all applicable fees. All payments are non-refundable unless otherwise stated. We reserve the right to change our pricing with reasonable notice.`
                },
                {
                  title: '6. Limitation of Liability',
                  content: `To the maximum extent permitted by law, Landio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.`
                },
                {
                  title: '7. Termination',
                  content: `We may terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these terms or is harmful to other users or our business.`
                },
                {
                  title: '8. Governing Law',
                  content: `These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Landio operates, without regard to its conflict of law provisions.`
                },
                {
                  title: '9. Contact Us',
                  content: `If you have any questions about these Terms of Service, please contact us at landio@support.com`
                }
              ].map((topic, i) => (
                <div key={i}>
                  <div style={{ 
                    height: '3px', 
                    background: 'linear-gradient(90deg, transparent, rgba(166, 218, 255, 0.3), transparent)',
                    margin: '24px 0'
                  }} />
                  <h3 style={{ color: 'white', marginBottom: '16px', fontSize: '20px' }}>{topic.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{topic.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer style={{ width: '100%', maxWidth: '1200px' }} />
    </div>
  )
}
