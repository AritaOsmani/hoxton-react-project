import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Alert from '../components/Alert';
import DailyDetails from '../components/DailyDetails';
import HourlyWeather from '../components/HourlyWeather';
import '../styles/CurrentWeather.css'
import '../styles/DailyForecast.css'

export default function DayForecast({ isCelcius, setIsCelcius }) {

    const params = useParams();
    const navigate = useNavigate()
    const [weatherDate, setWeatherDate] = useState(null)

    useEffect(() => {
        if (params === null) {
            navigate('/home')
        }
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad30963771034a06809133027222701&q=${params.search}&days=10&aqi=yes&alerts=yes&dt=${params.date}`).then(res => res.json()).then(date => setWeatherDate(date))
    }, [params])

    if (weatherDate === null) return <h1>Loading...</h1>
    const forecastData = weatherDate.forecast.forecastday[0];

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let date = new Date(forecastData.date)
    let dayName = days[date.getDay()]

    return <div className='daily-forecast'>
        {weatherDate.alerts.alert.length !== 0 && (weatherDate.alerts.alert.map(alert => <Alert alert={alert} />))}
        <div className='main-info'>
            <span className='date'> <b>{dayName}</b> {` `} {forecastData.date}</span>
            <div className='temp-info'>
                <img src={forecastData.day.condition.icon} alt="" />
                <span className='mx-temp'>{isCelcius ? `${forecastData.day['maxtemp_c']}°` : `${forecastData.day['maxtemp_f']}°`}</span>
                <span className='mm-temp'>{isCelcius ? `${forecastData.day['mintemp_c']}°` : `${forecastData.day['mintemp_f']}°`}</span>

                <div className='button-container'>
                    <button className={isCelcius ? 'selected-btn' : (weatherDate.current['is_day']) ? 'celcius-btn' : 'celcius-btn night-button'} onClick={() => {
                        setIsCelcius(true)
                    }}
                    >C</button>
                    <button onClick={() => {
                        setIsCelcius(false)
                    }}
                        className={isCelcius ? (weatherDate.current['is_day']) ? 'fahrenheit-btn' : 'fahrenheit-btn night-button' : 'selected-btn'}>F</button>
                </div>
            </div>

            <span className='condition-text'>{forecastData.day.condition.text}</span>
        </div>
        <HourlyWeather weatherData={weatherDate} isCelcius={isCelcius} />
        <DailyDetails weatherData={weatherDate} />
    </div>;
}
