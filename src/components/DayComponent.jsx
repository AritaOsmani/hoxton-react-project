import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function DayComponent({ currentDay, isCelcius, weatherData, search }) {
    const navigate = useNavigate();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let date = new Date(currentDay.date)
    let dayName = days[date.getDay()]
    let d = new Date(currentDay.date)

    return <li
        onClick={() => {
            navigate(`/day/${search}/${currentDay.date}`)
        }}
        className={weatherData.current['is_day'] ? 'dayDetails-container' : 'dayDetails-container dayDetails-night'}>
        <span>{dayName} {d.getDate()}</span>
        <img src={currentDay.day.condition.icon} alt="" />
        <div className='degree-container'>
            <span className='max-temp'>{isCelcius ? `${currentDay.day['maxtemp_c']}°` : `${currentDay.day['maxtemp_f']}°`}</span>
            <span className='min-temp'>{isCelcius ? `${currentDay.day['mintemp_c']}°` : `${currentDay.day['mintemp_f']}°`}</span>
        </div>
        <span className='text'>{currentDay.day.condition.text}</span>
    </li>;
}
