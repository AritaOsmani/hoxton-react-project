import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from '../components/Alert';
import CurrentWeather from '../components/CurrentWeather';
import DailyDetails from '../components/DailyDetails';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';
import MainHeader from '../components/MainHeader';
import '../styles/Main.css'

export default function Main({ search, setSearch, isCelcius, setIsCelcius, searchedCities, setSearchedCities, addNewSearchedCity }) {
    const [weatherData, setWeatherData] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.search === '') return
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad30963771034a06809133027222701&q=${params.search}&days=7&alerts=yes`).then(res => res.json()).then(res => {
            setWeatherData(res)
            addNewSearchedCity(res.location.name, res.location.country, res.current['temp_c'], res.current.condition.icon, res.current.condition.text)
        })
    }, [params.search])



    useEffect(() => {
        if (search === '') {
            navigate('/home')
        }
    }, [search])


    if (weatherData === null) return <h1>Loading...</h1>

    return <div className={weatherData.current['is_day'] === 1 ? `main-container day` : `main-container night`}>
        <MainHeader setSearch={setSearch} />
        {weatherData.alerts.alert.length !== 0 && (weatherData.alerts.alert.map(alert => <Alert alert={alert} />))}
        <CurrentWeather weatherData={weatherData} isCelcius={isCelcius} setIsCelcius={setIsCelcius} />
        <DailyWeather weatherData={weatherData} isCelcius={isCelcius} search={search} />
        <HourlyWeather weatherData={weatherData} isCelcius={isCelcius} />
        <DailyDetails weatherData={weatherData} />

    </div>;
}
