function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p>{stat.label}</p>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsGrid