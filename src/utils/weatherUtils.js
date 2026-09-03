const scenes = {
  Clear: {
    background: 'clear',
    particles: 'sun'
  },

  Rain: {
    background: 'rain',
    particles: 'rain'
  },

  Drizzle: {
    background: 'rain',
    particles: 'rain'
  },

  Snow: {
    background: 'snow',
    particles: 'snow'
  },

  Thunderstorm: {
    background: 'storm',
    particles: 'storm'
  },

  Clouds: {
    background: 'clouds',
    particles: 'wind'
  },

  Mist: {
    background: 'mist',
    particles: 'mist'
  },

  Fog: {
    background: 'mist',
    particles: 'mist'
  },

  Haze: {
    background: 'mist',
    particles: 'mist'
  }
}

const defaultScene = {
  background: 'default',
  particles: 'none'
}

function getWeatherScene(condition) {
  return scenes[condition] || defaultScene
}

export default getWeatherScene