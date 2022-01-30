import React from 'react';
import MoonInfo from './MoonInfo';
import SunInfo from './SunInfo';

export default function DailyDetails({ weatherData }) {
    const astroInfo = weatherData.forecast.forecastday[0].astro;
    return <div className='dailyDetails-container'>
        <h2>Daily Details</h2>
        <div className='astro-info-container'>
            <SunInfo astroInfo={astroInfo} />
            <MoonInfo />
        </div>

    </div>;
}
