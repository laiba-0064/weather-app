import { useMemo } from 'react'

function SnowParticles() {
  const snowflakes = useMemo(() => {
    return Array(30).fill(null).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }))
  }, [])

  return (
    <div className="snow-particles">
      {snowflakes.map((flake, index) => (
        <span
          key={index}
          style={{
            left: flake.left,
            animationDelay: flake.animationDelay,
            animationDuration: flake.animationDuration,
          }}
        ></span>
      ))}
    </div>
  )
}

export default SnowParticles