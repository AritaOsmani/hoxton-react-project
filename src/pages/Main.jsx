import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurrentWeather from '../components/CurrentWeather';
import DailyDetails from '../components/DailyDetails';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';
import MainHeader from '../components/MainHeader';

export default function Main({ weatherData, search, setSearch }) {

    const params = useParams()
    const navigate = useNavigate()
    const [isCelcius, setIsCelcius] = useState(true)

    useEffect(() => {
        if (search === '') {
            navigate('/home')
        }
    }, [search])


    if (weatherData === null) return <h1>Loading...</h1>

    return <div className={weatherData.current['is_day'] === 1 ? `main-container day` : `main-container night`}>
        <MainHeader setSearch={setSearch} />
        <CurrentWeather weatherData={weatherData} isCelcius={isCelcius} setIsCelcius={setIsCelcius} />
        <DailyWeather weatherData={weatherData} isCelcius={isCelcius} />
        <HourlyWeather weatherData={weatherData} isCelcius={isCelcius} />
        <DailyDetails weatherData={weatherData} />

    </div>;
}
