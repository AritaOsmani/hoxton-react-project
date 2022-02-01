import React from 'react';

import DayComponent from './DayComponent';

export default function DailyWeather({ weatherData, isCelcius, search }) {

    const forecastData = weatherData.forecast

    return <div
        className={weatherData.current['is_day'] ? 'dailyweather-container' : 'dailyweather-container dailyweather-night'}

    >
        <h2>Daily</h2>
        <ul>
            {forecastData.forecastday.map((day, index) =>
                <DayComponent
                    key={index}
                    currentDay={day}
                    isCelcius={isCelcius}
                    weatherData={weatherData}
                    search={search}
                />)}

        </ul>
    </div>;
}
