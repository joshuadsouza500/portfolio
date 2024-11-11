'use client'

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Service {
  id: string
  number: string
  title: string
  description: string
  content?: string
}

const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description: "Leveraging the latest technologies and industry-leading practices, I develop responsive, high-performance websites that are not only visually striking but also operate seamlessly.",
    content: "Full-stack development • Custom web applications • API integration • Database design"
  },
  {
    id: "web-design",
    number: "02",
    title: "Web Design",
    description: "Creating visually stunning and user-friendly interfaces that enhance brand identity and drive engagement through thoughtful design principles.",
    content: "UI/UX design • Responsive layouts • Design systems • Prototyping"
  },
  {
    id: "seo",
    number: "03",
    title: "SEO",
    description: "Optimizing websites for search engines to improve visibility, drive organic traffic, and achieve better rankings in search results.",
    content: "Technical SEO • Content optimization • Performance optimization • Analytics"
  }
]

export default function Component() {
  const [openService, setOpenService] = React.useState<string>("web-development")

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-24 md:grid-cols-2 md:px-6 lg:px-8">
        {/* Left Column - Fixed */}
        <div className="sticky top-20 h-fit">
          <div className="space-y-6">
            <span className="text-sm text-white/60">(Services)</span>
            <h2 className="text-5xl font-bold tracking-tight lg:text-6xl">What I Do</h2>
            <p className="text-lg text-white/60">
              I offer the expertise and insight to help you achieve your aspirations. Here's why partnering with me can make
              a significant difference in reaching your objectives and setting your brand apart in a competitive market.
            </p>
          </div>
        </div>

        {/* Right Column - Scrollable Services */}
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="border-t border-white/20 py-6">
              <button
                onClick={() => setOpenService(openService === service.id ? "" : service.id)}
                className="group flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white/60">({service.number})</span>
                  <h3 className="text-3xl font-semibold">{service.title}</h3>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-white">
                  {openService === service.id ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6">
                      <p className="text-white/60">{service.description}</p>
                      {service.content && (
                        <div className="mt-4 text-sm text-white/60">{service.content}</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}