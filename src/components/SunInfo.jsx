import React from 'react';

export default function SunInfo({ astroInfo, currentData }) {
    return <div className={currentData['is_day'] ? 'sunInfo-container' : 'sunInfo-container night-border'}>
        <span className='sunrise-title'>Sunrise</span>
        <div className='sunrise'>
            <i className="fal fa-sunrise"></i>
            <span className='sunrise-sunset-time'>{astroInfo.sunrise}</span>
        </div>

        <span className='sunset-title'>Sunset</span>
        <div className='sunset'>
            <i className="fal fa-sunset"></i>
            <span className='sunrise-sunset-time'>{astroInfo.sunset}</span>
        </div>
    </div>
}
