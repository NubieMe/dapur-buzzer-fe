import { Home, Zap, Search, User } from "lucide-react"
import Link from "next/link"

interface BottomNavigationProps {
  currentPage: string
}

export default function BottomNavigation({ currentPage }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
      <div className="flex justify-around py-2">
        <Link
          href="/"
          className={`flex flex-col items-center py-2 px-3 ${
            currentPage === "home" ? "text-purple-600" : "text-gray-400"
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href="/packages"
          className={`flex flex-col items-center py-2 px-3 ${
            currentPage === "recommended" ? "text-purple-600" : "text-gray-400"
          }`}
        >
          <Zap className="w-5 h-5 mb-1" />
          <span className="text-xs">Recomended</span>
        </Link>

        <Link
          href="/search"
          className={`flex flex-col items-center py-2 px-3 ${
            currentPage === "search" ? "text-purple-600" : "text-gray-400"
          }`}
        >
          <Search className="w-5 h-5 mb-1" />
          <span className="text-xs">Search</span>
        </Link>

        <Link
          href="/about"
          className={`flex flex-col items-center py-2 px-3 ${
            currentPage === "about" ? "text-purple-600" : "text-gray-400"
          }`}
        >
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs">About Us</span>
        </Link>
      </div>
    </nav>
  )
}
