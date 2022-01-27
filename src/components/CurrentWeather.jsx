import React from 'react';

export default function CurrentWeather({ weatherData }) {
    //  if (weatherData === undefined) return <h1>Loading...</h1>
    return <div className='current-container'>
        <h1>{`${weatherData.location.name}, ${weatherData.location.country}`}</h1>
        <div className='temp-info'>
            <img className='icon' src={weatherData.current.condition.icon} alt="" />
            <span className='temp'>{weatherData.current['temp_c']}</span>
            <div className='button-container'>
                <button className='celcius-btn'>C</button>
                <button className='fahrenheit-btn'>F</button>
            </div>

        </div>
        <span className='condition-text'>{weatherData.current.condition.text}</span>
        <span className='time-since-updated'> <b>Last updated:</b> {weatherData.current['last_updated']}</span>
        <div className='additional-info'>
            <span> <b>Feels like:</b> {weatherData.current['feelslike_c']}</span>
            <span> <b>Wind:</b> {weatherData.current['wind_kph']} km/h</span>
            <span> <b>Visibility:</b> {weatherData.current['vis_km']}km</span>
            <span> <b>Humidity:</b> {weatherData.current.humidity}%</span>
            <span> <b>Cloud:</b> {weatherData.current.cloud}%</span>
        </div>
    </div>;
}
