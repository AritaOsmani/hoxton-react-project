import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurrentWeather from '../components/CurrentWeather';

export default function Main({ weatherData }) {

    const params = useParams()
    const navigate = useNavigate()
    const [isCelcius, setIsCelcius] = useState(true)

    useEffect(() => {
        if (params.search === null) {
            navigate('/home')
        }
    }, [params])

    if (params.serach === null) return <h1>Search for a city</h1>
    if (weatherData === null) return <h1>Loading...</h1>

    return <div className='main-container'>
        <CurrentWeather weatherData={weatherData} isCelcius={isCelcius} setIsCelcius={setIsCelcius} />

    </div>;
}
