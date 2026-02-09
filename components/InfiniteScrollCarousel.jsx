'use client'

import { useEffect, useRef } from 'react'

export default function InfiniteScrollCarousel({ children, speed = 50, direction = 'left' }) {
    const scrollerRef = useRef(null)

    useEffect(() => {
        const scroller = scrollerRef.current
        if (!scroller) return

        // Clone children for seamless loop
        const scrollContent = scroller.querySelector('[data-scroll-content]')
        if (!scrollContent) return

        const clone = scrollContent.cloneNode(true)
        scroller.appendChild(clone)

        let scrollPos = 0
        const scrollWidth = scrollContent.scrollWidth

        const animate = () => {
            if (direction === 'left') {
                scrollPos -= speed / 60
                if (Math.abs(scrollPos) >= scrollWidth) {
                    scrollPos = 0
                }
            } else {
                scrollPos += speed / 60
                if (scrollPos >= 0) {
                    scrollPos = -scrollWidth
                }
            }

            scroller.style.transform = `translateX(${scrollPos}px)`
            requestAnimationFrame(animate)
        }

        const animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [speed, direction])

    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)'
        }}>
            <div
                ref={scrollerRef}
                style={{
                    display: 'flex',
                    width: 'max-content',
                    willChange: 'transform'
                }}
            >
                <div data-scroll-content style={{ display: 'flex', gap: '60px' }}>
                    {children}
                </div>
            </div>
        </div>
    )
}
