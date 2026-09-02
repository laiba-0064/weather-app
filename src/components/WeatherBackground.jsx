function WeatherBackground({ condition }) {
  let background

  if (condition === 'Rain') {
    background = 'rain'
  } else if (condition === 'Snow') {
    background = 'snow'
  } else if (condition === 'Clear') {
    background = 'clear'
  } else if (condition === 'Clouds') {
    background = 'clouds'
  } else {
    background = 'default'
  }

  const rainDrops = Array(10).fill(null)

  return (
    <div className={`weather-background ${background}`}>
      {condition === 'Clear' && <div className="sun"></div>}

      {condition === 'Rain' && (
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
)}
    </div>
  )
}

export default WeatherBackground