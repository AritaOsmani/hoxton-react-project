import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Intro from './pages/Intro'
import Main from './pages/Main'

function App() {

  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    if (search === '') return
    fetch(`https://api.weatherapi.com/v1/current.json?key=ad30963771034a06809133027222701&q=${search}`).then(res => res.json()).then(res => setWeatherData(res))
  }, [search])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Intro setSearch={setSearch} />}></Route>
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
