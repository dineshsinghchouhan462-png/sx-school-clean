"use client"

import {
  BedDouble,
  Droplets,
  ShieldCheck,
  Zap,
  Shirt,
  Home,
  MapPin,
  GraduationCap,
} from "lucide-react"

export default function Hostel() {
  return (
    <section
      id="hostel"
      className="relative py-28 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">
            Residential Campus
          </p>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Saint Xavier&apos;s Hostel
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A safe, well-managed residential facility designed for comfort,
            discipline, and academic focus — offering parents complete peace
            of mind.
          </p>
        </div>

        {/* Core Info Card */}
        <div className="rounded-3xl bg-background p-8 shadow-sm mb-16">
          <p className="text-lg leading-relaxed text-foreground">
            The hostel operates in a <strong>separate residential building</strong>,
            away from the main school campus, providing a calm and focused
            environment for both boys and girls.
          </p>
        </div>

        {/* Facilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            { icon: BedDouble, text: "1, 2 & 3 Bed Rooms" },
            { icon: Droplets, text: "Hot & Cold Water Supply" },
            { icon: ShieldCheck, text: "Fully CCTV Secured Campus" },
            { icon: Zap, text: "24×7 Power Backup" },
            { icon: Shirt, text: "Laundry Facility" },
            { icon: Home, text: "Separate Boys & Girls Hostel" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-background p-5 shadow-sm"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Location + Academic Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-background p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-2">
                  Hostel Location
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Near Sheetla Mata Temple,  
                  Manasar, Nagaur District (Rajasthan)
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-background p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-2">
                  Academic Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Especially suitable for students preparing for
                  <strong> JEE / NEET </strong>
                  and other competitive examinations, with a disciplined
                  and supportive study atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
