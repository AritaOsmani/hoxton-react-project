import React from 'react';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import MoonInfo from './MoonInfo';
import SunInfo from './SunInfo';
import '../../src/styles/DailyDetails.css'

export default function DailyDetails({ weatherData }) {
    const astroInfo = weatherData.forecast.forecastday[0].astro;
    console.log('astroInfo: ', astroInfo)
    const currentData = weatherData.current;
    return <div className='dailyDetails-container'>
        <h2>Daily Details</h2>
        <div className='astro-info-container'>
            <SunInfo astroInfo={astroInfo} currentData={currentData} />
            <MoonInfo astroInfo={astroInfo} currentData={currentData} />
            <AdditionalInfo currentData={currentData} />
        </div>

    </div>;
}
