import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Humidity({ humidity }) {
    return <div className='humidity'>
        <span className='additional-text'>Humidity</span>
        <CircularProgressbar value={humidity} text={`${humidity}%`} />
    </div>
}
