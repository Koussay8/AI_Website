'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })

export default function PrivacyPage() {
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
                Privacy Policy
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
                Welcome to Landio ("we" or "us"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our website and related services.
              </p>

              <ol style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>1. Information We Collect</li>
                <li style={{ marginBottom: '8px' }}>2. How We Use Your Information</li>
                <li style={{ marginBottom: '8px' }}>3. Sharing Your Information</li>
                <li style={{ marginBottom: '8px' }}>4. Cookies and Similar Technologies</li>
                <li style={{ marginBottom: '8px' }}>5. Your Choices</li>
                <li style={{ marginBottom: '8px' }}>6. Security</li>
                <li style={{ marginBottom: '8px' }}>7. Children's Privacy</li>
                <li style={{ marginBottom: '8px' }}>8. Changes to This Privacy Policy</li>
                <li style={{ marginBottom: '8px' }}>9. Contact Us</li>
              </ol>

              {/* Topics */}
              {[
                {
                  title: '1. Information We Collect',
                  content: `1.1 Personal Information\nWe may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it to us, such as when you register for an account, subscribe to newsletters, or contact us through the website.\n\n1.2 Usage Information\nWe may collect information about your use of the website, including your IP address, browser type, device information, and pages visited. This information helps us analyze trends, administer the site, and improve user experience.`
                },
                {
                  title: '2. How We Use Your Information',
                  content: `We use the collected information for various purposes, including:\n• Providing and maintaining the website\n• Communicating with you about your account and our services\n• Sending newsletters, promotional materials, and other information you request\n• Analyzing website usage and improving our services`
                },
                {
                  title: '3. Sharing Your Information',
                  content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business.`
                },
                {
                  title: '4. Cookies and Similar Technologies',
                  content: `We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of the site.`
                },
                {
                  title: '5. Your Choices',
                  content: `You can manage your communication preferences by unsubscribing from newsletters or adjusting your account settings. You may also contact us to update or delete your personal information.`
                },
                {
                  title: '6. Security',
                  content: `We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.`
                },
                {
                  title: '7. Children\'s Privacy',
                  content: `Our website is not directed to individuals under the age of 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.`
                },
                {
                  title: '8. Changes to This Privacy Policy',
                  content: `We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Privacy Policy.`
                },
                {
                  title: '9. Contact Us',
                  content: `If you have any questions about this Privacy Policy, please contact us at landio@support.com`
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
