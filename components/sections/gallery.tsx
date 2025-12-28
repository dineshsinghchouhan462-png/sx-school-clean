""use client"

import { useEffect, useRef, useState } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly & Discipline", type: "large" },
  { src: "/images/gallery/gallery-2.jpg", caption: "School Leadership & Achievements", type: "large" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony", type: "small" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation", type: "small" },

  { src: "/images/gallery/gallery-5.jpg", caption: "Community & Values", type: "small" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Mentorship & Guidance", type: "small" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Early Learning Environment", type: "large" },

  { src: "/images/gallery/gallery-8.jpg", caption: "Activity-Based Learning", type: "small" },
  { src: "/images/gallery/gallery-9.jpg", caption: "Classroom Engagement", type: "small" },

  { src: "/images/gallery/gallery-10.jpg", caption: "Celebrations & Culture", type: "small" },
  { src: "/images/gallery/gallery-11.jpg", caption: "Holistic Development", type: "small" },
]

function GalleryItem({ src, caption, type }: any) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${
        type === "large" ? "col-span-2" : "col-span-1"
      }`}
    >
      <img
        src={src}
        alt={caption}
        className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-out ${
          visible ? "scale-100" : "scale-105"
        }`}
      />

      <div
        className={`absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-sm md:text-base font-light tracking-wide">
          {caption}
        </p>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-medium mb-16 tracking-tight">
          Life at Saint Xavier’s
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {images.map((img, i) => (
            <GalleryItem key={i} {...img} />
          ))}
        </div>
      </div>
    </section>
  )
}
