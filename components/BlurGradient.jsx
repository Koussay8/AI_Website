'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * BlurGradient Component
 * Creates a progressive blur effect using multiple layered backdrop filters
 * Based on Framer's BlurGradient component
 */
export default function BlurGradient({ 
  blur = 7, 
  borderRadius = '0px', 
  direction = 'to bottom',
  transition = { duration: 0.3 }
}) {
  const blurSteps = useMemo(() => [
    {
      blur: `${blur / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`
    },
    {
      blur: `${blur / 2 / 2 / 2 / 2 / 2 / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`
    },
    {
      blur: `${blur / 2 / 2 / 2 / 2 / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`
    },
    {
      blur: `${blur / 2 / 2 / 2 / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`
    },
    {
      blur: `${blur / 2 / 2 / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`
    },
    {
      blur: `${blur / 2 / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`
    },
    {
      blur: `${blur / 2}px`,
      gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`
    },
    {
      blur: `${blur}px`,
      gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`
    }
  ], [blur])

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }}>
      {blurSteps.map((step, index) => (
        <motion.div
          key={index}
          transition={transition}
          initial={{ backdropFilter: `blur(${step.blur})` }}
          animate={{ backdropFilter: `blur(${step.blur})` }}
          style={{
            opacity: 1,
            position: 'absolute',
            inset: 0,
            zIndex: index + 1,
            maskImage: `linear-gradient(${direction}, ${step.gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${step.gradient})`,
            borderRadius: borderRadius,
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>
  )
}
