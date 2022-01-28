import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurrentWeather from '../components/CurrentWeather';
import DailyWeather from '../components/DailyWeather';

export default function Main({ weatherData, search }) {

    const params = useParams()
    const navigate = useNavigate()
    const [isCelcius, setIsCelcius] = useState(true)

    useEffect(() => {
        if (search === '') {
            navigate('/home')
        }
    }, [search])


    if (weatherData === null) return <h1>Loading...</h1>

    return <div className='main-container'>
        <CurrentWeather weatherData={weatherData} isCelcius={isCelcius} setIsCelcius={setIsCelcius} />
        <DailyWeather weatherData={weatherData} isCelcius={isCelcius} />

    </div>;
}
