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
            const i = Number(entry.target.getAttribute("data-index"))
            setVisible(v => (v.includes(i) ? v : [...v, i]))
          }
        })
      },
      { threshold: 0.45 }
    )

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">

        {/* CINEMATIC OPENING */}
        {images.slice(0, 2).map((img, i) => (
          <div
            key={i}
            ref={el => (refs.current[i] = el)}
            data-index={i}
            className={`relative overflow-hidden rounded-3xl transition-all duration-[1200ms]
              ${visible.includes(i)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-16 scale-[0.96]"}
            `}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-[480px] object-cover transition-transform duration-[1400ms]
                group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p
              className={`absolute bottom-8 left-8 text-white text-xl tracking-wide transition-all duration-700
                ${visible.includes(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"}
              `}
            >
              {img.caption}
            </p>
          </div>
        ))}

        {/* EDITORIAL RHYTHM */}
        {images.slice(2).reduce((rows: any[], img, i) => {
          if (i % 3 === 0) rows.push(images.slice(2 + i, 2 + i + 3))
          return rows
        }, []).map((row: any[], rowIndex: number) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* BIG IMAGE */}
            <div
              ref={el => (refs.current[rowIndex * 3 + 2] = el)}
              data-index={rowIndex * 3 + 2}
              className={`md:col-span-2 relative overflow-hidden rounded-3xl transition-all duration-[1200ms]
                ${visible.includes(rowIndex * 3 + 2)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"}
              `}
            >
              <img
                src={row[0]?.src}
                alt={row[0]?.caption}
                className="w-full h-[420px] object-cover transition-transform duration-[1400ms]
                  ${visible.includes(rowIndex * 3 + 2) ? "scale-100" : "scale-[1.05]"}
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className={`absolute bottom-6 left-6 text-white text-lg transition-all duration-700
                ${visible.includes(rowIndex * 3 + 2)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"}
              `}>
                {row[0]?.caption}
              </p>
            </div>

            {/* STACKED IMAGES */}
            <div className="flex flex-col gap-12">
              {row.slice(1).map((img: any, j: number) => {
                const idx = rowIndex * 3 + 3 + j
                return (
                  <div
                    key={idx}
                    ref={el => (refs.current[idx] = el)}
                    data-index={idx}
                    className={`relative overflow-hidden rounded-2xl transition-all duration-[1000ms]
                      ${visible.includes(idx)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"}
                    `}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className={`w-full h-[190px] object-cover transition-transform duration-[1200ms]
                        ${visible.includes(idx) ? "scale-100" : "scale-[1.06]"}
                      `}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <p className={`absolute bottom-4 left-4 text-white text-sm transition-all duration-700
                      ${visible.includes(idx)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"}
                    `}>
                      {img.caption}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
