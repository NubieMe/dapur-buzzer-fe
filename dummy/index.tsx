import { Camera, Dumbbell, Film, Gamepad2, Headphones, Heart, Music2, Plane, Play, ShoppingBag, Utensils, Video } from "lucide-react"

export type Category = {
  icon: React.ReactNode
  title: string
  color: string
  isShowAll?: boolean
}

export const carouselSlides = [
  {
    image: "/banner1.png",
  },
  {
    image: "/banner2.png",
  },
  {
    image: "/banner3.png",
  },
  {
    image: "/banner4.png",
  },
  {
    image: "/banner5.png",
  },
]

export const allCategories: Category[] = [
  {
    icon: <Plane className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Travel & Lifestyle",
    color: "text-purple-600",
  },
  {
    icon: <Headphones className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "DJ & Penyanyi",
    color: "text-purple-600",
  },
  {
    icon: <Film className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Entertainment",
    color: "text-purple-600",
  },
  {
    icon: <Play className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Youtuber",
    color: "text-purple-600",
  },
  {
    icon: <Video className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Content Creator",
    color: "text-purple-600",
  },
  {
    icon: <Camera className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Photography",
    color: "text-purple-600",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Gaming",
    color: "text-purple-600",
  },
  {
    icon: <Heart className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Beauty & Fashion",
    color: "text-purple-600",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Shopping",
    color: "text-purple-600",
  },
  {
    icon: <Utensils className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Food & Culinary",
    color: "text-purple-600",
  },
  {
    icon: <Dumbbell className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Health & Fitness",
    color: "text-purple-600",
  },
  {
    icon: <Music2 className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Music & Arts",
    color: "text-purple-600",
  },
]

export const influencerData = [
  {
    name: "Sylva Umari Mu...",
    username: "sylvamulaichelaa",
    followers: "161K Followers",
    image: "/woman-in-brown-hijab-and-coat.jpg",
    recommended: true,
  },
  {
    name: "Cantika Nova R...",
    username: "cantikaa_nrp",
    followers: "84.4K Followers",
    image: "/woman-in-brown-hijab-smiling.jpg",
    recommended: true,
  },
  {
    name: "Ulfah Lutfiani",
    username: "ulfahitmi",
    followers: "23.6K Followers",
    image: "/woman-in-blue-outfit-with-sunglasses.jpg",
    recommended: true,
  },
  {
    name: "Santi Septiani",
    username: "santisptn__",
    followers: "46.1K Followers",
    image: "/santi-septiani-influencer-in-hijab.jpg",
    recommended: true,
  },
  {
    name: "Anggie Siti Rimayani",
    username: "Anggierimafebriani",
    followers: "15.5K Followers",
    image: "/anggie-siti-rimayani-influencer-smiling.jpg",
    recommended: true,
  },
  {
    name: "Ai Ropikoh",
    username: "airopikoh",
    followers: "28.3K Followers",
    image: "/ai-ropikoh-influencer-in-pink-hijab.jpg",
    recommended: false,
  },
  {
    name: "Dwi Mila Sari",
    username: "dwimilasari",
    followers: "19.7K Followers",
    image: "/dwi-mila-sari-influencer-in-beige-hijab.jpg",
    recommended: false,
  },
  {
    name: "Maya Indira",
    username: "mayaindira_",
    followers: "52.8K Followers",
    image: "/maya-indira-influencer.jpg",
    recommended: true,
  },
]