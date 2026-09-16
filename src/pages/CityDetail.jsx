
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import StatsGrid from '../components/StatsGrid'

function CityDetail() {
  const { name } = useParams()

  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchWeather(city) {
    setLoading(true)
    setError(null)

    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )

      console.log(response.data)
      setWeatherData(response.data)
    } catch (err) {
      console.error(err)
      setError("Failed to fetch weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(name)
  }, [name])

  if (loading) {
    return <h1>Loading weather...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  if (!weatherData) {
    return <h1>No weather data available</h1>
  }

  const stats = [
    {
      label: 'Humidity',
      value: `${weatherData.main.humidity}%`,
    },
    {
      label: 'Wind',
      value: `${weatherData.wind.speed} m/s`,
    },
    {
      label: 'Visibility',
      value: `${weatherData.visibility / 1000} km`,
    },
    {
      label: 'Feels Like',
      value: `${Math.round(weatherData.main.feels_like)}°`,
    },
    {
      label: 'Pressure',
      value: `${weatherData.main.pressure} hPa`,
    },
    {
      label: 'Clouds',
      value: `${weatherData.clouds.all}%`,
    },
  ]

  return (
    <div className="relative z-10 text-black">
      <h1>{weatherData.name}</h1>

      <h2>{Math.round(weatherData.main.temp)}°</h2>

      <p>{weatherData.weather[0].description}</p>

      <StatsGrid stats={stats} />
    </div>
  )
}

export default CityDetail



