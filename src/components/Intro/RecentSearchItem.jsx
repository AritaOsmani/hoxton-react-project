import React from 'react';

export default function RecentSearchItem() {
    return <li className='recent-search-list-item'>
        <span className='city-name'>Pristina,Kosovo</span>
        <div className='recent-search-info'>
            <span className='recent-current-temp'>0°</span>
            <img src="//cdn.weatherapi.com/weather/64x64/day/323.png" alt="" />
        </div>
        <span>Cloudy</span>
    </li>
}
