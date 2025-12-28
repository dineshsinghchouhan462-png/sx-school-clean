"use client"

import { useEffect, useRef } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly & Discipline", size: "large" },
  { src: "/images/gallery/gallery-2.jpg", caption: "School Leadership & Achievements", size: "large" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony", size: "small" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation", size: "small" },

  { src: "/images/gallery/gallery-5.jpg", caption: "Tree Plantation Drive", size: "small" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Community Engagement", size: "small" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Early Learning Environment", size: "small" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Activity-Based Learning", size: "small" },

  { src: "/images/gallery/gallery-9.jpg", caption: "Cultural Celebration", size: "small" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Festive Traditions", size: "small" },

  { src: "/images/gallery/gallery-11.jpg", caption: "School Gatherings", size: "small" },
]

export default function Gallery() {
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.3 }
    )

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-medium tracking-tight mb-4">
            Life at Saint Xavier&apos;s
          </h2>
          <p className="text-muted-foreground text-lg">
            Moments that define discipline, learning, and community.
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-12">
          {images.map((img, i) => (
            <div
              key={i}
              ref={el => {
                if (el) refs.current[i] = el
              }}
              className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ease-out opacity-0 translate-y-6
                ${img.size === "large" ? "h-[420px]" : "h-[280px]"}
                ${img.size === "small" ? "md:w-[48%]" : "w-full"}
                ${img.size === "small" ? "inline-block md:mr-[2%]" : ""}
              `}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />

              {/* Caption (auto-reveal on scroll, not hover) */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-sm tracking-wide opacity-90">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
