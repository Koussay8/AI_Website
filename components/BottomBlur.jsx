'use client'

import BlurGradient from './BlurGradient'

/**
 * Bottom Blur Component - Client wrapper for BlurGradient
 * Fixed at bottom of screen like Landio
 */
export default function BottomBlur() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '100px',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>
      <BlurGradient 
        blur={7}
        borderRadius="0px"
        direction="to bottom"
      />
    </div>
  )
}
