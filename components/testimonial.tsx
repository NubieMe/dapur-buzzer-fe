import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { testimonials } from "@/dummy"

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="px-4 lg:px-8 py-8 lg:py-16 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-12 text-center">
          Apa kata mereka tentang Dapur Buzzer?
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={60}
                  height={60}
                  className="lg:w-20 lg:h-20 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 mb-1 lg:mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base lg:text-lg">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed italic mb-4 lg:mb-6">
                {testimonials[current].text}
              </p>

              <div className="text-center">
                <div className="text-6xl lg:text-6xl text-purple-600 mb-4">"</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-6 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-purple-600" />
          </button>

          {/* Tombol Next */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-purple-600" />
          </button>
        </div>

        <div className="flex justify-center mt-6 lg:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors ${
                index === current ? "bg-purple-600" : "bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
