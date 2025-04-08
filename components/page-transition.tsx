"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  return (
    <div className="transition-opacity duration-300" style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </div>
  )
}
