"use client"

import { useEffect, useRef, useState } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly" },
  { src: "/images/gallery/gallery-2.jpg", caption: "School Leadership & Achievements" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation" },

  { src: "/images/gallery/gallery-5.jpg", caption: "Early Learning Environment" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Activity-Based Learning" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Campus Engagement" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Cultural Activities" },

  { src: "/images/gallery/gallery-9.jpg", caption: "Community Programs" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Student Participation" },

  { src: "/images/gallery/gallery-11.jpg", caption: "Celebrations & Events" },
]

export default function Gallery() {
  const [visible, setVisible] = useState<number[]>([])
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisible((v) => (v.includes(index) ? v : [...v, index]))
          }
        })
      },
      { threshold: 0.4 }
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* BIG HERO IMAGES */}
        {images.slice(0, 2).map((img, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className={`relative overflow-hidden rounded-3xl transition-all duration-1000
              ${visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className={`absolute bottom-6 left-6 text-white text-lg tracking-wide transition-opacity duration-700
              ${visible.includes(i) ? "opacity-100" : "opacity-0"}
            `}>
              {img.caption}
            </p>
          </div>
        ))}

        {/* PAIR IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {images.slice(2).map((img, i) => {
            const index = i + 2
            return (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                data-index={index}
                className={`relative overflow-hidden rounded-2xl transition-all duration-1000
                  ${visible.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-5 left-5 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-500">
                  {img.caption}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
                    }
