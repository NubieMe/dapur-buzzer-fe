import { Instagram, User, Zap } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function InfluencerGridCard({
  name,
  username,
  followers,
  image,
  recommended,
}: {
  name: string
  username: string
  followers: string
  image: string
  recommended: boolean
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={200}
          className="w-full h-48 lg:h-56 object-cover"
        />
        {recommended && (
          <div className="absolute top-3 right-3 bg-purple-500 rounded-full p-2">
            <Zap className="text-white w-4 h-4" />
          </div>
        )}
      </div>

      <div className="p-4 lg:p-5">
        <h3 className="font-semibold text-gray-800 mb-2 text-base lg:text-lg">{name}</h3>

        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 text-sm lg:text-base font-medium mb-3">
          Book Now
        </Button>

        <div className="space-y-1">
          {username && (
            <div className="flex items-center gap-2 text-gray-500 text-xs lg:text-sm">
              <Instagram className="w-4 h-4" />
              <span>{username}</span>
            </div>
          )}
          {followers && (
            <div className="flex items-center gap-2 text-gray-500 text-xs lg:text-sm">
              <User className="w-4 h-4" />
              <span>{followers}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}