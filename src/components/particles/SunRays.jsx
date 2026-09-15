import { useMemo } from 'react'

function SunRays() {
  const rays = useMemo(() => {
    return Array(6).fill(null).map((_, index) => ({
      rotation: `${index * 30 - 75}deg`,
      animationDelay: `${index * 0.3}s`,
    }))
  }, [])

  return (
    <div className="sun-rays">
      {rays.map((ray, index) => (
        <span
          key={index}
          className="sunray"
          style={{
            transform: `rotate(${ray.rotation})`,
            animationDelay: ray.animationDelay,
          }}
        ></span>
      ))}
    </div>
  )
}

export default SunRays