'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { getBlogPost, formatDate, blogPosts } from '@/lib/blog'

const Nav = dynamic(() => import('@/framer/nav/nav'), { ssr: false })
const Footer = dynamic(() => import('@/framer/navigation/footer'), { ssr: false })

export default function BlogPostPage({ params }) {
  const { slug } = use(params)
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

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

      <main style={{ width: '100%', maxWidth: '900px', padding: '0 40px' }}>
        <article style={{
          width: '100%',
          paddingTop: '160px',
          paddingBottom: '100px'
        }}>
          {/* Back Link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgb(166, 218, 255)',
              textDecoration: 'none',
              marginBottom: '32px',
              fontSize: '14px'
            }}
          >
            ← Retour au Blog
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: 'rgba(166, 218, 255, 0.1)',
              borderRadius: '100px',
              marginBottom: '16px'
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

            <h1 style={{
              fontSize: '44px',
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'white',
              marginBottom: '16px'
            }}>
              {post.titleFr || post.title}
            </h1>

            <p style={{
              fontSize: '16px',
              color: 'rgba(213, 219, 230, 0.7)'
            }}>
              {formatDate(post.date)}
            </p>
          </div>

          {/* Featured Image */}
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '40px',
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />

          {/* Intro */}
          <div
            style={{
              fontSize: '20px',
              lineHeight: 1.7,
              color: 'rgb(213, 219, 230)',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}
            dangerouslySetInnerHTML={{ __html: post.introFr || post.intro }}
          />

          {/* Content */}
          <div
            className="blog-content"
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgb(213, 219, 230)'
            }}
            dangerouslySetInnerHTML={{ __html: post.contentFr || post.content }}
          />

          {/* Separator */}
          <div style={{
            height: '3px',
            background: 'linear-gradient(90deg, transparent, rgba(166, 218, 255, 0.3), transparent)',
            margin: '60px 0'
          }} />

          {/* Related Posts */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 500,
              color: 'white',
              marginBottom: '32px'
            }}>
              Autres Articles
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px'
            }}>
              {blogPosts
                .filter(p => p.slug !== slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      backgroundColor: 'rgb(16, 19, 28)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid rgba(216, 231, 242, 0.07)',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{
                        width: '100%',
                        height: '140px',
                        backgroundImage: `url(${relatedPost.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }} />
                      <div style={{ padding: '16px' }}>
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: 500,
                          color: 'white',
                          marginBottom: '8px',
                          lineHeight: 1.3
                        }}>
                          {relatedPost.titleFr || relatedPost.title}
                        </h4>
                        <p style={{
                          fontSize: '12px',
                          color: 'rgba(213, 219, 230, 0.6)'
                        }}>
                          {formatDate(relatedPost.date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer style={{ width: '100%', maxWidth: '1200px' }} />

      <style jsx global>{`
        .blog-content h2 {
          font-size: 28px;
          font-weight: 500;
          color: white;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        .blog-content h3 {
          font-size: 22px;
          font-weight: 500;
          color: white;
          margin-top: 32px;
          margin-bottom: 16px;
        }
        .blog-content p {
          margin-bottom: 20px;
        }
        .blog-content ul, .blog-content ol {
          margin-left: 24px;
          margin-bottom: 20px;
        }
        .blog-content li {
          margin-bottom: 8px;
        }
        .blog-content a {
          color: rgb(166, 218, 255);
          text-decoration: underline;
        }
        .blog-content blockquote {
          border-left: 3px solid rgb(166, 218, 255);
          padding-left: 20px;
          margin: 24px 0;
          font-style: italic;
          color: rgba(213, 219, 230, 0.8);
        }
      `}</style>
    </div>
  )
}
