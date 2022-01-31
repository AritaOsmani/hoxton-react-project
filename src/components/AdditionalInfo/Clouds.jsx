import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Clouds({ clouds }) {
    return <div className='clouds'>
        <span className='additional-text'>Clouds</span>
        <CircularProgressbar value={clouds} text={`${clouds}%`} />
    </div>
}
