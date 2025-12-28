"use client"

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
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

        {/* SECTION TITLE */}
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
          Campus Life
        </h2>

        {/* TOP FEATURED IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {images.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-6 left-6 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* COMPACT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {images.slice(2).map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
