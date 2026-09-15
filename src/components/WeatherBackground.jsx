import getWeatherScene from '../utils/weatherUtils'
import RainParticles from './particles/RainParticles'
import SnowParticles from './particles/SnowParticles'
import WindParticles from './particles/WindParticles'
import StormParticles from './particles/StormParticles'
import SunRays from './particles/SunRays'

function WeatherBackground({ condition }) {
  const scene = getWeatherScene(condition)

  return (
    <div className={`weather-background ${scene.background}`}>

      {scene.particles === 'sun' && (
  <div className="sun-container">
    <div className="sun"></div>
    <SunRays />
  </div>
)}

      {scene.particles === 'rain' && <RainParticles />}

      {scene.particles === 'snow' && <SnowParticles />}

      {scene.particles === 'wind' && <WindParticles />}

      {scene.particles === 'storm' && (
  <>
    <RainParticles />
    <StormParticles />
  </>
)}
    </div>
  )
}

export default WeatherBackground