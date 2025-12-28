"use client"

import { useEffect, useRef, useState } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly" },
  { src: "/images/gallery/gallery-2.jpg", caption: "Leadership & Achievements" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation" },

  { src: "/images/gallery/gallery-5.jpg", caption: "Learning Environment" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Activity-Based Education" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Campus Life" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Cultural Programs" },

  { src: "/images/gallery/gallery-9.jpg", caption: "Community Engagement" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Student Participation" },

  { src: "/images/gallery/gallery-11.jpg", caption: "Celebrations & Events" },
]

export default function Gallery() {
  const [visible, setVisible] = useState<number[]>([])
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisible(v => (v.includes(index) ? v : [...v, index]))
          }
        })
      },
      { threshold: 0.45 }
    )

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">

        {/* BIG OPENING SHOTS */}
        {images.slice(0, 2).map((img, i) => (
          <div
            key={i}
            ref={el => (refs.current[i] = el)}
            data-index={i}
            className={`relative overflow-hidden rounded-3xl transition-all duration-[1200ms]
              ${visible.includes(i)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-16 scale-[0.97]"}
            `}
          >
            <img
              src={img.src}
              alt={img.caption}
              className={`w-full h-[460px] object-cover transition-transform duration-[1400ms]
                ${visible.includes(i) ? "scale-100" : "scale-[1.06]"}
              `}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p
              className={`absolute bottom-8 left-8 text-white text-xl transition-all duration-700
                ${visible.includes(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"}
              `}
            >
              {img.caption}
            </p>
          </div>
        ))}

        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {images.slice(2).map((img, i) => {
            const index = i + 2
            return (
              <div
                key={index}
                ref={el => (refs.current[index] = el)}
                data-index={index}
                className={`relative overflow-hidden rounded-2xl transition-all duration-[1000ms]
                  ${visible.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-14"}
                `}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full h-[300px] object-cover transition-transform duration-[1200ms]
                    ${visible.includes(index) ? "scale-100" : "scale-[1.08]"}
                  `}
                />
                <div className="absolute inset-0 bg-black/40" />
                <p
                  className={`absolute bottom-5 left-5 text-white text-sm transition-all duration-700
                    ${visible.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"}
                  `}
                >
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
