"use client"

import { useEffect, useRef } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly & Discipline" },
  { src: "/images/gallery/gallery-2.jpg", caption: "School Leadership & Achievements" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation" },

  { src: "/images/gallery/gallery-5.jpg", caption: "Community & Values" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Guidance & Mentorship" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Early Learning Environment" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Activity-Based Learning" },

  { src: "/images/gallery/gallery-9.jpg", caption: "Student Engagement" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Cultural Activities" },

  { src: "/images/gallery/gallery-11.jpg", caption: "Celebrations & Togetherness" },
]

export default function Gallery() {
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.3 }
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

        {/* BIG IMAGE 1 & 2 */}
        {images.slice(0, 2).map((img, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el!)}
            className="group relative overflow-hidden rounded-3xl opacity-0 translate-y-8 transition-all duration-700"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-6 left-6 text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {img.caption}
            </p>
          </div>
        ))}

        {/* GRID IMAGES */}
        <div className="grid md:grid-cols-2 gap-10">
          {images.slice(2, 10).map((img, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i + 2] = el!)}
              className="group relative overflow-hidden rounded-2xl opacity-0 translate-y-8 transition-all duration-700"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* FINAL BIG IMAGE */}
        <div
          ref={(el) => (refs.current[10] = el!)}
          className="group relative overflow-hidden rounded-3xl opacity-0 translate-y-8 transition-all duration-700"
        >
          <img
            src={images[10].src}
            alt={images[10].caption}
            className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="absolute bottom-6 left-6 text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {images[10].caption}
          </p>
        </div>

      </div>

      {/* visibility animation */}
      <style jsx>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
