import { useEffect, useState } from 'react'
import axios from 'axios'
import { getAqiInfo } from '../utils/aqiUtils'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function Dashboard({ onConditionChange }) {
  const [weatherData, setWeatherData] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [aqi, setAqi] = useState(null)

  async function fetchWeather(city) {
    setLoading(true)
    setError(null)

    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

      // Current weather
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )

      console.log(response.data)
      setWeatherData(response.data)

      onConditionChange(response.data.weather[0].main)

      // Air Quality
      const { lat, lon } = response.data.coord

      const aqiResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )

      console.log(aqiResponse.data)

      const aqiValue = aqiResponse.data.list[0].main.aqi

      console.log('AQI value:', aqiValue)

      setAqi(aqiValue)

      // 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      )

      console.log(forecastResponse.data)
      setForecast(forecastResponse.data)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather('Mexico')
  }, [])

  if (loading) {
    return <h1>Loading weather...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  if (!weatherData) {
    return <h1>No weather data available</h1>
  }

  const dailyForecast =
    forecast?.list?.filter((item) => {
      return item.dt_txt.includes('12:00:00')
    }) || []

  const hourlyForecast =
    forecast?.list?.slice(0, 8).map((item) => ({
      time: item.dt_txt.slice(11, 16),
      temp: Math.round(item.main.temp),
    })) || []

  const aqiInfo = getAqiInfo(aqi)

  console.log(hourlyForecast)

  return (
    <div>
      <p>{weatherData.name}</p>

      <h1>{Math.round(weatherData.main.temp)}°</h1>

      <p>{weatherData.weather[0].description}</p>

      <p>
        H: {Math.round(weatherData.main.temp_max)}°
        {' · '}
        L: {Math.round(weatherData.main.temp_min)}°
      </p>

      <p>
        Feels like {Math.round(weatherData.main.feels_like)}°
      </p>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <p>Humidity</p>
          <p>{weatherData.main.humidity}%</p>
        </div>

        <div>
          <p>Wind</p>
          <p>{weatherData.wind.speed} m/s</p>
        </div>

        <div>
          <p>Visibility</p>
          <p>{weatherData.visibility / 1000} km</p>
        </div>

        <div>
          <p>UV Index</p>
          <p>N/A</p>
        </div>
      </div>

      <div>
        <h2>5-Day Forecast</h2>

        <div className="grid grid-cols-5 gap-4">
          {dailyForecast.map((day) => (
            <div key={day.dt}>
              <p>{day.dt_txt.slice(5, 10)}</p>
              <p>{Math.round(day.main.temp)}°</p>
              <p>{day.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2>Hourly Temperature</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={hourlyForecast}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temp" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <p>AQI</p>
        <p>{aqi ?? 'N/A'}</p>
        <p>{aqiInfo.label}</p>
      </div>
    </div>
  )
}

export default Dashboard