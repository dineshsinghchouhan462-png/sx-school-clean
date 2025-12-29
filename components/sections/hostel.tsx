"use client"

import { Home, ShieldCheck, Droplets, Zap, BedDouble, Shirt } from "lucide-react"

export default function Hostel() {
  return (
    <section
      id="hostel"
      className="relative py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground">
            Separate Residential Hostel Facility
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A safe, well-managed residential environment designed for students
            from Nursery to Class 12, ensuring comfort, discipline, and peace of
            mind for parents.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-10">

            {/* Trust Card */}
            <div className="rounded-2xl bg-muted/40 p-6">
              <p className="text-base leading-relaxed text-foreground">
                Saint Xavier&apos;s Hostel operates in a <strong>separate building</strong>,
                away from the school campus, providing a calm and focused
                residential atmosphere for both boys and girls.
              </p>
            </div>

            {/* Facilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {[
                { icon: BedDouble, text: "1, 2 & 3 Bed Rooms" },
                { icon: Droplets, text: "Hot & Cold Water Supply" },
                { icon: ShieldCheck, text: "Full CCTV Secured Campus" },
                { icon: Zap, text: "24×7 Power Backup" },
                { icon: Shirt, text: "Laundry Facility" },
                { icon: Home, text: "Separate Boys & Girls Hostel" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl bg-background p-4 shadow-sm"
                >
                  <item.icon className="text-primary w-5 h-5" />
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-border p-6">
              <h4 className="font-medium text-lg mb-2">Hostel Location</h4>
              <p className="text-muted-foreground leading-relaxed">
                Near Sheetla Mata Temple,  
                <br />
                Manasar, Nagaur District (Rajasthan)
              </p>
            </div>

            {/* Academic Focus */}
            <div className="rounded-2xl bg-muted/30 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hostel facility is especially suitable for students preparing
                for <strong>JEE / NEET</strong> and other competitive examinations,
                offering a disciplined and supportive study environment.
              </p>
            </div>

          </div>

          {/* RIGHT: VISUAL REPRESENTATION */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg bg-muted/40 h-[420px] flex items-center justify-center text-center px-10">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                  Residential Campus
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  Saint Xavier&apos;s Hostel
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designed for safety, comfort and academic focus —
                  a home away from home for growing students.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
