'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { blogPosts, formatDate } from '@/lib/blog'

const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })
const Badge = dynamic(() => import('@/framer/elements/badge'), { ssr: false })

export default function BlogPage() {
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
          position: 'relative',
          width: '100%',
          padding: '160px 40px 120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '54px' }}>
            {/* Header */}
            <div className="section-header">
              <Badge GJdJmFCj5="Articles" />
              <h1 style={{ fontSize: '44px', fontWeight: 500, color: 'white' }}>Derniers Articles</h1>
              <p>Restez informé des dernières améliorations et nouvelles fonctionnalités</p>
            </div>

            {/* Blog Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '54px',
              width: '100%'
            }}>
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <article style={{
                    backgroundColor: 'rgb(16, 19, 28)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(216, 231, 242, 0.07)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: '100%',
                      height: '200px',
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                    <div style={{ padding: '24px' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: 'rgba(166, 218, 255, 0.1)',
                        borderRadius: '100px',
                        marginBottom: '12px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          color: 'rgb(166, 218, 255)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          {post.tagFr || post.tag}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: 500,
                        color: 'white',
                        marginBottom: '12px',
                        lineHeight: 1.3
                      }}>
                        {post.titleFr || post.title}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(213, 219, 230, 0.7)',
                        marginBottom: '16px'
                      }}>
                        {formatDate(post.date)}
                      </p>
                      <div
                        style={{
                          fontSize: '14px',
                          color: 'rgb(213, 219, 230)',
                          lineHeight: 1.6
                        }}
                        dangerouslySetInnerHTML={{ __html: post.introFr || post.intro }}
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-bottom" />
          <div className="bg-shape" />
        </section>
      </main>

      {/* Footer */}
      <Footer style={{ width: '100%', maxWidth: '1200px' }} />
    </div>
  )
}
