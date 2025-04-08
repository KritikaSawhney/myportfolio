export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mt-4 rounded-full" />
    </div>
  )
}
