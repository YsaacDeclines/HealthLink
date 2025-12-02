export default function TrackSection() {
  const items = [
    { icon: "📋", title: "Personal Health Tracker" },
    { icon: "🎯", title: "Take A Quiz!" },
    { icon: "✨", title: "Suggestions for you" },
    { icon: "🏆", title: "Achievement Badges" },
    { icon: "👥", title: "First Aid Simulation" },
    { icon: "🔔", title: "Health Alerts" },
  ]

  return (
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-6 pb-4 border-b-2 border-gray-300">Track and Achieve</h2>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-3">
            <div className="text-5xl">{item.icon}</div>
            <p className="font-semibold text-center text-sm md:text-base">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
