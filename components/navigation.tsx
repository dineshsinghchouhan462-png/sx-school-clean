"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* NAV BAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="Saint Xavier's School Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-base md:text-lg font-medium tracking-tight text-foreground">
                Saint Xavier's
              </span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="Saint Xavier's School Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-base md:text-lg font-medium tracking-tight text-foreground">
                Saint Xavier&apos;s
              </span>
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl flex flex-col">
          
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="Saint Xavier's School Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-medium">
                Saint Xavier&apos;s
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* MENU LINKS */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 text-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-light text-foreground hover:opacity-70 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
