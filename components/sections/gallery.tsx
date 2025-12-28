"use client"

const galleryImages = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning assembly at the school campus" },
  { src: "/images/gallery/gallery-2.jpg", caption: "Special guests visiting the institution" },
  { src: "/images/gallery/gallery-3.jpg", caption: "Early education classrooms in session" },

  { src: "/images/gallery/gallery-4.jpg", caption: "Students participating in activities" },
  { src: "/images/gallery/gallery-5.jpg", caption: "Celebrations and school events" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Classroom learning environment" },
  { src: "/images/gallery/gallery-7.jpg", caption: "Cultural and academic programs" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Student engagement moments" },
  { src: "/images/gallery/gallery-9.jpg", caption: "On-campus interactions" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Special occasions at school" },
  { src: "/images/gallery/gallery-11.jpg", caption: "Everyday life at Saint Xavier’s" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Life at Saint Xavier’s
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A visual glimpse into our campus, classrooms, and community.
          </p>
        </div>

        {/* ===== TOP FEATURED IMAGES ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryImages.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-sm text-white/90">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== EDITORIAL GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(3).map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl group aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Caption */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-xs text-white/90 leading-snug">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
