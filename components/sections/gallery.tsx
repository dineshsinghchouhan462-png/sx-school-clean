"use client"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly & Discipline" },
  { src: "/images/gallery/gallery-2.jpg", caption: "School Leadership & Achievements" },
  { src: "/images/gallery/gallery-3.jpg", caption: "Classroom Learning Environment" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Creative Activities & Events" },
  { src: "/images/gallery/gallery-5.jpg", caption: "Cultural Celebrations" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Campus Life & Infrastructure" },
  { src: "/images/gallery/gallery-7.jpg", caption: "Student Participation" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Early Education & Care" },
  { src: "/images/gallery/gallery-9.jpg", caption: "Sports & Physical Development" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Awards & Recognition" },
  { src: "/images/gallery/gallery-11.jpg", caption: "Everyday Moments at School" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-medium tracking-tight mb-4">
            Life at Saint Xavier’s
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into our campus culture, discipline, learning, and everyday moments.
          </p>
        </div>

        {/* HERO GRID (Top Premium Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {images.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Caption */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm tracking-wide">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.slice(2).map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* Caption */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs tracking-wide">
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
