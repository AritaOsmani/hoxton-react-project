import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Precipitation({ precipitation }) {
    return <div className='precipitation'>
        <span className='additional-text'>Precipitation</span>
        <CircularProgressbar
            value={precipitation}
            maxValue={200}
            text={`${precipitation}%`}
            styles={{
                // trail: {
                //     stroke: 'red'
                // }

            }}
        />
    </div>
}
