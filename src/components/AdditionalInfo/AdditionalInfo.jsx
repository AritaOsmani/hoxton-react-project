import React from 'react';
import Clouds from './Clouds';

import Humidity from './Humidity';
import Precipitation from './Precipitation';
import UVIndex from './UVIndex';


export default function AdditionalInfo({ currentData }) {
    return <div className={currentData['is_day'] ? 'additional-info-container' : 'additional-info-container night-border'}>
        <Precipitation precipitation={currentData['precip_mm']} />
        <Humidity humidity={currentData.humidity} />
        <UVIndex index={currentData.uv} />
        <Clouds clouds={currentData.cloud} />
    </div>;
}
