import Image from "next/image";
import { Button } from "../ui/button";

export default function PackageCard({ title, price, image }: { title: string; price: string; image: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
      <Image src={image || "/placeholder.svg"} alt={title} width={80} height={80} className="rounded-xl object-cover" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{price}</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm">
          View Detail
        </Button>
      </div>
    </div>
  )
}