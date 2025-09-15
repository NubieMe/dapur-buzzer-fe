export default function CategoryCard({
  icon,
  title,
  color,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  color: string
  onClick?: () => void
}) {
  return (
    <div
      className="flex flex-col items-center text-center p-3 lg:p-6 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className={`mb-4 ${color}`}>{icon}</div>
      <span className="text-xs lg:text-sm text-gray-600 leading-tight">{title}</span>
    </div>
  )
}