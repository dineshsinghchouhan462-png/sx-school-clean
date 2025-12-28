export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="h-px w-20 bg-black/10 mb-6" />
          <h2 className="text-4xl font-semibold tracking-tight">
            Contact & Location
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-10">

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Saint Xavier's Senior Secondary School<br />
                Manasar, Nagaur District<br />
                Rajasthan, India
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Contact</h3>
              <p className="text-muted-foreground">
                📞 +91 XXXXX XXXXX<br />
                ✉️ admin@saintxaviersmanasar.edu.in
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Operating Days</h3>
              <p className="text-muted-foreground">
                Monday – Saturday<br />
                8:00 AM – 4:00 PM
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/Saint+Xavier's+Senior+Secondary+School+Manasar+Nagaur"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              View on Google Maps ↗
            </a>
          </div>

          {/* RIGHT: MAP */}
          <div className="relative overflow-hidden rounded-3xl shadow-sm border bg-background">
            <iframe
              src="https://www.google.com/maps?q=Saint%20Xavier's%20Senior%20Secondary%20School%20Manasar%20Nagaur&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
