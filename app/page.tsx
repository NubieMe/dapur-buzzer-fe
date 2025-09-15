"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Film,
  Headphones,
  House,
  Instagram,
  LayoutGrid,
  Menu,
  MessageCircle,
  Music2,
  Plane,
  Play,
  Search,
  Star,
  User,
  Video,
  Zap,
  Camera,
  Gamepad2,
  Heart,
  ShoppingBag,
  Utensils,
  Dumbbell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useMemo } from "react"
import { motion, useMotionValue } from "framer-motion"
import PackageCard from "@/components/card/package"
import InfluencerGridCard from "@/components/card/influencer"
import CategoryCard from "@/components/card/category"
import { allCategories, carouselSlides, Category, influencerData } from "@/dummy"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  
  useEffect(() => {
    setIsMounted(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const displayedCategories: Category[] = useMemo(() => {
    if (!isMounted) return allCategories.slice(0, 6) // Default fallback

    const isDesktop = window.innerWidth >= 1024

    if (isDesktop || showAllCategories) {
      return allCategories
    }

    // For mobile, show 5 random categories + "Show All" button
    const shuffled = [...allCategories].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 5)

    return [
      ...selected,
      {
        icon: <LayoutGrid className="w-8 h-8 lg:w-12 lg:h-12" />,
        title: "Show All",
        color: "text-purple-600",
        isShowAll: true,
      },
    ]
  }, [showAllCategories, isMounted])

  const getDragConstraints = () => {
    if (!containerRef.current) return { left: 0, right: 0 }

    const containerWidth = containerRef.current.offsetWidth
    const contentWidth = containerRef.current.scrollWidth

    return {
      left: -(contentWidth - containerWidth),
      right: 0,
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-purple-600 py-3 pr-2 lg:pr-0 mb-2 lg:mb-0">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Image src="/dapur-buzzer.png" alt="Dapur Buzzer Logo" width={120} height={30} />
          </div>
          <div className="flex-1 mx-3 lg:mx-8 max-w-1xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Cari influencer..." className="pl-10 bg-white/90 border-0 rounded-full text-sm" />
            </div>
          </div>
          <Menu className="text-white w-6 h-6 lg:w-10 lg:h-10" />
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="relative h-80 lg:h-120 max-w-7xl mx-auto">
          <Image
            src={carouselSlides[currentSlide].image || "/placeholder.svg"}
            alt="Hero banner"
            width={500}
            height={0}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-4 lg:bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
              className="p-2 lg:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
            </button>
            <div className="flex gap-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-purple-600" : "bg-purple-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
              className="p-2 lg:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 lg:px-8 py-6 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
            {displayedCategories.map((category, index) => (
              <CategoryCard
                key={`${category.title}-${index}`}
                icon={category.icon}
                title={category.title}
                color={category.color}
                onClick={category.isShowAll ? () => setShowAllCategories(true) : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 pb-6 lg:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4 lg:mb-8">
            <h2 className="text-lg lg:text-2xl font-semibold text-gray-800">Recomended Influencer</h2>
            <Link href="#" className="flex items-center gap-1 text-purple-600 text-sm lg:text-base font-medium">
              Lihat Lainnya
            </Link>
          </div>

          <div className="lg:hidden overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex gap-4 pb-2 cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragConstraints={getDragConstraints()}
              dragElastic={0.1}
              whileTap={{ cursor: "grabbing" }}
              onDragEnd={() => {}}
              onPointerDown={(e) => {
                e.currentTarget.style.cursor = "grabbing"
              }}
              onPointerUp={(e) => {
                e.currentTarget.style.cursor = "grab"
              }}
              onWheel={(e) => {
                e.preventDefault()
                const currentX = x.get()
                const constraints = getDragConstraints()
                const newX = Math.max(constraints.left, Math.min(constraints.right, currentX - e.deltaY))
                x.set(newX)
              }}
            >
              {influencerData.map((influencer, index) => (
                <div key={index} className="w-80 flex-shrink-0">
                  <InfluencerGridCard
                    name={influencer.name}
                    username={influencer.username}
                    followers={influencer.followers}
                    image={influencer.image}
                    recommended={influencer.recommended}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {influencerData.slice(0, 8).map((influencer, index) => (
              <InfluencerGridCard
                key={index}
                name={influencer.name}
                username={influencer.username}
                followers={influencer.followers}
                image={influencer.image}
                recommended={influencer.recommended}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="px-4 lg:px-8 py-8 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            <div>
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-8">Butuh bantuan?</h2>

              <div className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 rounded-full py-5 lg:py-6 bg-transparent text-sm lg:text-base"
                >
                  <MessageCircle /> Tanya tentang Dapur Buzzer
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-5 lg:py-6 text-sm lg:w-full">
                  Gabung bersama Kami
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4 lg:mb-6">Influencer Lainnya</h3>

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                <InfluencerGridCard
                  name="Santi Septiani"
                  username="santisptn__"
                  followers="46.1K Followers"
                  image="/santi-septiani-influencer-in-hijab.jpg"
                  recommended={true}
                />
                <InfluencerGridCard
                  name="Anggie Siti Rimayani"
                  username="Anggierimafebriani"
                  followers="15.5K Followers"
                  image="/anggie-siti-rimayani-influencer-smiling.jpg"
                  recommended={true}
                />
                <InfluencerGridCard
                  name="Ai Ropikoh"
                  username=""
                  followers=""
                  image="/ai-ropikoh-influencer-in-pink-hijab.jpg"
                  recommended={false}
                />
                <InfluencerGridCard
                  name="Dwi Mila Sari"
                  username=""
                  followers=""
                  image="/dwi-mila-sari-influencer-in-beige-hijab.jpg"
                  recommended={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="px-4 lg:px-8 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 lg:mb-8">
            <h2 className="text-xl lg:text-3xl font-semibold text-gray-800">Package Micro Influencer</h2>
            <Link href="#" className="flex items-center gap-1 text-purple-600 text-sm lg:text-base font-medium">
              Lihat Lebih Banyak
            </Link>
          </div>

          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-8 lg:mb-12">
            <PackageCard
              title="Paket Endorsement 10 Micro Influencer"
              price="Rp 2.500.000"
              image="/micro-influencer-package-endorsement.jpg"
            />
            <PackageCard
              title="Paket Paid Promote 10 Micro Influencer"
              price="Rp 1.500.000"
              image="/micro-influencer-package-paid-promote.jpg"
            />
            <PackageCard
              title="Paket Produk Review 10 Micro Influencer"
              price="Rp 2.000.000"
              image="/micro-influencer-package-product-review.jpg"
            />
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-8 lg:py-12 mt-2">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4 lg:mb-14 text-center lg:text-left">
            Klien Kami
          </h3>
          <div className="flex justify-between lg:justify-center items-center lg:gap-30">
            <div>
              <Image src="/klien-01.png" alt="" width={90} height={50} className="lg:w-40 lg:h-16" />
            </div>
            <div>
              <Image src="/klien-02.png" alt="" width={90} height={50} className="lg:w-40 lg:h-16" />
            </div>
            <div>
              <Image src="/klien-08.png" alt="" width={90} height={50} className="lg:w-40 lg:h-16" />
            </div>
            <div>
              <Image src="/klien-04.png" alt="" width={90} height={50} className="lg:w-40 lg:h-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 lg:px-8 py-8 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-12 text-center">
            Apa kata mereka tentang Dapur Buzzer?
          </h2>

          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
              <Image
                src="/lucy-juliana-wagey-influencer-profile.jpg"
                alt="Lucy Juliana Wagey"
                width={60}
                height={60}
                className="lg:w-20 lg:h-20 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-1 mb-1 lg:mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-semibold text-gray-800 text-base lg:text-lg">Lucy Juliana Wagey</h3>
                <p className="text-gray-500 text-sm lg:text-base">Influencer</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed italic mb-4 lg:mb-6">
              Dapur buzzer memiliki pelayanan yang sangat baik dan informasi yang sangat detail dalam menyampaikan brief
              jika kurang dimengerti, semenjak bergabung dengan dapur buzzer saya kebanjiran endorse dan paidpromote.
            </p>

            <div className="text-center">
              <div className="text-6xl lg:text-8xl text-purple-600 mb-4">"</div>
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:mt-8">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-600 rounded-full"></div>
          </div>

          {/* App Download Section */}
          <div className="text-center mt-12 lg:mt-20">
            <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-2xl mx-auto mb-4 lg:mb-6 flex items-center justify-center">
              <Image src="/AVADAPUR_02.jpg" alt="logo" width={200} height={200} className="rounded-2xl" />
            </div>
            <h3 className="text-xl lg:text-3xl font-semibold text-gray-800 mb-2 lg:mb-4">Dapur Buzzer Indonesia</h3>
            <p className="text-gray-500 text-sm lg:text-base mb-6 lg:mb-8">
              Influencer & KOL Management Platform Indonesia
            </p>

            <div className="flex justify-center gap-4 lg:gap-6 mb-8 lg:mb-12">
              <div>
                <Image src="/logo-appstore.png" alt="Apple Store" width={130} height={50} className="lg:w-50 lg:h-16" />
              </div>
              <div>
                <Image
                  src="/logo-playstore.png"
                  alt="Google Playstore"
                  width={130}
                  height={50}
                  className="lg:w-50 lg:h-16"
                />
              </div>
            </div>

            <div className="flex justify-center gap-6 lg:gap-8 mb-4 lg:mb-6">
              <Link href="#">
                <Instagram className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-purple-600 transition-colors" />
              </Link>
              <Link href="#">
                <Music2 className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-purple-600 transition-colors" />
              </Link>
              <Link href="#">
                <Facebook className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-purple-600 transition-colors" />
              </Link>
            </div>

            <p className="text-gray-400 text-xs lg:text-sm">
              © 2025 Dapur Buzzer Part of PT.FH Creative Group Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 text-purple-600 mb-1">
              <House />
            </div>
            <span className="text-xs text-purple-600 font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 text-gray-400 mb-1">
              <Zap />
            </div>
            <span className="text-xs text-gray-400">Recomended</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 text-gray-400 mb-1">
              <Search />
            </div>
            <span className="text-xs text-gray-400">Search</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 text-gray-400 mb-1">
              <User />
            </div>
            <span className="text-xs text-gray-400">About Us</span>
          </div>
        </div>
      </div>
    </div>
  )
}
