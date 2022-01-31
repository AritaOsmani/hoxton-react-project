import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function UVIndex({ index }) {
    function uvScale(val) {
        if (val >= 0 && val <= 2) {
            return 'Low'
        }
        if (val >= 3 && val <= 5) {
            return 'Moderate'
        }
        if (val === 6 || val === 7) {
            return 'High'
        }
        if (val >= 8 && val <= 10) {
            return 'Very High'
        }
        if (val >= 11) {
            return 'Extreme'
        }
    }
    return <div className='uv-index'>
        <span className='additional-text'>UV Index</span>
        <CircularProgressbar
            value={index}
            maxValue={20}
            text={`${index} ${uvScale(index)}`}
            styles={{

                text: {
                    // Text size
                    fontSize: '14px',
                }

            }}
        />
    </div>
}
