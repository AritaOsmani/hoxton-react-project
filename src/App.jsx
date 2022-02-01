import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import DayForecast from './pages/DayForecast'
import Intro from './pages/Intro'
import Main from './pages/Main'

function App() {

  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [isCelcius, setIsCelcius] = useState(true)

  useEffect(() => {
    if (search === '') return
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad30963771034a06809133027222701&q=${search}&days=7&alerts=yes`).then(res => res.json()).then(res => setWeatherData(res))
  }, [search])


  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Intro setSearch={setSearch} />}></Route>
        <Route path='/home/:search'
          element={
            <Main
              weatherData={weatherData}
              search={search}
              setSearch={setSearch}
              isCelcius={isCelcius}
              setIsCelcius={setIsCelcius}
            />} />
        <Route path='/day/:search/:date' element={<DayForecast isCelcius={isCelcius} setIsCelcius={setIsCelcius} />} />
      </Routes>
    </div>
  )
}

export default App
