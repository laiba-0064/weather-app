import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CityDetail from './pages/CityDetail'
import Explore from './pages/Explore'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/city/:name" element={<CityDetail />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App