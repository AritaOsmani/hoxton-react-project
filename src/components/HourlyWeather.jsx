import React from 'react';
import HourComponent from './HourComponent';
const container = document.querySelector('.hourlyWeather-container');
export default function HourlyWeather({ weatherData, isCelcius }) {


    function slide(direction) {
        const container = document.querySelector('.ul-container');
        let scrollCompleted = 0;
        let slideVariable = setInterval(() => {
            if (direction === 'left') {
                container.scrollLeft -= 10;
            } else {
                container.scrollLeft += 10;
            }
            scrollCompleted += 10
            if (scrollCompleted >= 50) {
                clearInterval(slideVariable)
            }
        }, 20)
    }
    const hourData = weatherData.forecast.forecastday[0].hour
    return <div className='hourlyWeather-container'>
        <h2>Hourly</h2>
        <ul className='ul-container'>
            {hourData.map(hour => <HourComponent hour={hour} isCelcius={isCelcius} weatherData={weatherData} />)}


        </ul>
        <button onClick={() => {
            slide('left')

        }}
            className='prev-btn'><i className={weatherData.current['is_day'] ? "fas fa-chevron-left" : "fas fa-chevron-left prev-icon"}></i></button>
        <button onClick={() => {
            slide('right')
        }} className='next-btn'><i className={weatherData.current['is_day'] ? "fas fa-chevron-right" : "fas fa-chevron-right next-icon"}></i></button>
    </div>;
}
