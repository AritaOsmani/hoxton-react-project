import React from 'react';

export default function HourComponent({ hour, isCelcius }) {

    return <li className='hourDetails-container'>
        <img src={hour.condition.icon} alt="" />
        <span className='hour-temp'>{isCelcius ? `${hour['temp_c']}°` : `${hour['temp_f']}°`}</span>
        <span className='hour-text'>{hour.condition.text}</span>
        <span className='p-info'> <i className="fad fa-tint"></i> {`${hour['chance_of_rain']}%`}</span>
        <span className='wind-info'> <i className="fal fa-location-arrow"></i> {`${hour['wind_kph']} km/h`}</span>
        <span className='time'>  {hour.time.substr(10)}</span>
    </li>
}
