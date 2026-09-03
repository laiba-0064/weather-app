import getWeatherScene from '../utils/weatherUtils'
import RainParticles from './particles/RainParticles'
import SnowParticles from './particles/SnowParticles'
import WindParticles from './particles/WindParticles'

function WeatherBackground({ condition }) {
  const scene = getWeatherScene(condition)

  return (
    <div className={`weather-background ${scene.background}`}>
      {scene.particles === 'sun' && <div className="sun"></div>}

      {scene.particles === 'rain' && <RainParticles />}

      {scene.particles === 'snow' && <SnowParticles />}

      {scene.particles === 'wind' && <WindParticles />}
    </div>
  )
}

export default WeatherBackground