import React from 'react';
import HourComponent from './HourComponent';

export default function HourlyWeather({ weatherData, isCelcius }) {
    const hourData = weatherData.forecast.forecastday[0].hour
    return <div className='hourlyWeather-container'>
        <h2>Hourly</h2>
        <ul>
            {hourData.map(hour => <HourComponent hour={hour} isCelcius={isCelcius} />)}


        </ul>

    </div>;
}
