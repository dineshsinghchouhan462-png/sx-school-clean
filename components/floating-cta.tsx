"use client"

import { Phone, MessageCircle } from "lucide-react"

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919214018172"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full
                   bg-green-500 px-4 py-3 text-white shadow-lg
                   transition-all duration-300
                   hover:bg-green-600 hover:scale-[1.05]
                   active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="text-sm font-medium hidden sm:inline">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919214018172"
        className="group flex items-center gap-3 rounded-full
                   bg-primary px-4 py-3 text-white shadow-lg
                   transition-all duration-300
                   hover:scale-[1.05]
                   active:scale-95"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="text-sm font-medium hidden sm:inline">
          Call Now
        </span>
      </a>

    </div>
  )
}
