function RainParticles() {
  const rainDrops = Array(10).fill(null)

  return (
    <div className="rain-drops">
      {rainDrops.map((_, index) => (
        <span
          key={index}
          style={{
            left: `${index * 10}%`,
            animationDelay: `${index * 0.2}s`
          }}
        ></span>
      ))}
    </div>
  )
}

export default RainParticles