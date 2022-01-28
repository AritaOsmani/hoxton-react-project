import React from 'react';
import DayComponent from './DayComponent';

export default function DailyWeather({ weatherData, isCelcius }) {

    const forecastData = weatherData.forecast

    return <div className='dailyweather-container'>
        <h2>Daily</h2>
        <ul>
            {forecastData.forecastday.map(day => <DayComponent currentDay={day} isCelcius={isCelcius} />)}

        </ul>
    </div>;
}
