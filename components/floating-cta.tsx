"use client"

import { Phone, MessageCircle } from "lucide-react"

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919214018172"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366]
          shadow-lg shadow-black/20
          transition-all duration-300
          hover:scale-110 hover:shadow-xl
        "
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </a>

      {/* Call */}
      <a
        href="tel:+919214018172"
        aria-label="Call School"
        className="
          group flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#0B5ED7]
          shadow-lg shadow-black/20
          transition-all duration-300
          hover:scale-110 hover:shadow-xl
        "
      >
        <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </a>

    </div>
  )
}
