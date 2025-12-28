import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Saint Xavier's Senior Secondary School | Manasar, Nagaur",
  description:
    "Saint Xavier's Senior Secondary School, Manasar, Nagaur District, Rajasthan. Hindi & English Medium school committed to academic excellence and discipline.",
  icons: {
    icon: "/images/logo/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-20 antialiased`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
