"use client"

export default function Gallery() {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.jpg",
    "/images/gallery/gallery-10.jpg",
    "/images/gallery/gallery-11.jpg",
  ]

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Campus Gallery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A glimpse into daily life, learning spaces, and the vibrant environment of our school.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={src}
                alt={`School gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
