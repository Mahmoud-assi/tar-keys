import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('home')

  console.log(activeSection)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 56
      let current = activeSection
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(id)
        if (el && scrollPosition >= el.offsetTop) {
          current = id
          break
        }
      }
      if (current !== activeSection) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, activeSection])

  return activeSection
}
