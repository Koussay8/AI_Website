'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })
const MainButton = dynamic(() => import('@/framer/main-button'), { ssr: false })

export default function NotFound() {
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

      <main style={{ 
        width: '100%', 
        maxWidth: '1200px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '160px 40px 100px'
      }}>
        <div style={{ 
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          {/* 404 Number */}
          <div style={{
            fontSize: '180px',
            fontWeight: 700,
            lineHeight: 1,
            background: 'linear-gradient(180deg, rgb(166, 218, 255) 0%, rgba(166, 218, 255, 0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '24px'
          }}>
            404
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '44px',
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'white',
            marginBottom: '16px'
          }}>
            Page Not Found
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '18px',
            color: 'rgba(213, 219, 230, 0.7)',
            lineHeight: 1.6,
            marginBottom: '40px'
          }}>
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* Button */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, rgb(166, 218, 255) 0%, rgb(120, 190, 255) 100%)',
                border: 'none',
                borderRadius: '8px',
                color: 'rgb(4, 7, 13)',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(166, 218, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Go Back Home
            </button>
          </Link>

          {/* Additional Links */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            gap: '32px',
            justifyContent: 'center'
          }}>
            <Link 
              href="/contact" 
              style={{ 
                color: 'rgb(166, 218, 255)', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Contact Support
            </Link>
            <Link 
              href="/blog" 
              style={{ 
                color: 'rgb(166, 218, 255)', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Visit Blog
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer style={{ width: '100%', maxWidth: '1200px' }} />
    </div>
  )
}
