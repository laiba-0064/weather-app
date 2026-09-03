import { useMemo } from 'react'

function WindParticles() {
  const windLines = useMemo(() => {
    return Array(14).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      width: `${80 + Math.random() * 120}px`,
      rotation: `${-15 + Math.random() * 30}deg`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${5 + Math.random() * 4}s`,
    }))
  }, [])

  return (
    <div className="wind-particles">
      {windLines.map((line, index) => (
        <span
          key={index}
          className="windline"
          style={{
            top: line.top,
            width: line.width,
            transform: `rotate(${line.rotation})`,
            animationDelay: line.animationDelay,
            animationDuration: line.animationDuration,
          }}
        ></span>
      ))}
    </div>
  )
}

export default WindParticles