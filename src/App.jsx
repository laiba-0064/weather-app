import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CityDetail from './pages/CityDetail'
import Explore from './pages/Explore'
import Settings from './pages/Settings'
import WeatherBackground from './components/WeatherBackground'

function App() {
  const [condition, setCondition] = useState('Clouds')

  function handleConditionChange(newCondition) {
    setCondition(newCondition)
  }

  return (
    <>
      <WeatherBackground condition={condition} />

      <Routes>
        <Route
          path="/"
          element={<Dashboard onConditionChange={handleConditionChange} />}
        />
        <Route path="/city/:name" element={<CityDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}
export default App