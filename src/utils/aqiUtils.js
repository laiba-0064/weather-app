export function getAqiInfo(aqi) {
  const levels = {
    1: { label: 'Good', color: 'green' },
    2: { label: 'Fair', color: 'yellow' },
    3: { label: 'Moderate', color: 'orange' },
    4: { label: 'Poor', color: 'red' },
    5: { label: 'Very Poor', color: 'darkred' },
  }

  return levels[aqi] || { label: 'Unknown', color: 'gray' }
}