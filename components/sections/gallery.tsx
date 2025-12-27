"use client"

import { useEffect, useRef, useState } from "react"

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const images = [
    {
      src: "https://placehold.co/800x600?text=School+building+exterior+with+students+walking+to+class+natural+daylight+documentary+photography",
      alt: "School building exterior with students walking to class natural daylight documentary photography",
      span: "md:col-span-2",
    },
    {
      src: "https://placehold.co/600x600?text=Students+engaged+in+classroom+learning+with+teacher+at+blackboard+documentary+style",
      alt: "Students engaged in classroom learning with teacher at blackboard documentary style",
      span: "md:col-span-1",
    },
    {
      src: "https://placehold.co/600x600?text=Library+interior+with+students+reading+and+studying+quiet+atmosphere+natural+light",
      alt: "Library interior with students reading and studying quiet atmosphere natural light",
      span: "md:col-span-1",
    },
    {
      src: "https://placehold.co/800x600?text=Students+playing+sports+on+playground+outdoor+activities+candid+documentary+photography",
      alt: "Students playing sports on playground outdoor activities candid documentary photography",
      span: "md:col-span-2",
    },
    {
      src: "https://placehold.co/800x600?text=Science+laboratory+with+students+conducting+experiments+focused+learning+environment",
      alt: "Science laboratory with students conducting experiments focused learning environment",
      span: "md:col-span-1",
    },
    {
      src: "https://placehold.co/600x800?text=Hostel+dormitory+clean+and+organized+student+accommodation+natural+lighting",
      alt: "Hostel dormitory clean and organized student accommodation natural lighting",
      span: "md:col-span-1",
    },
  ]

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden bg-muted/30 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
