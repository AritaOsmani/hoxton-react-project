import React from 'react';
import './ModalStyle.css';
export default function AlertModal({ alert, setAlertModal }) {
    return <div className='modal-wrapper'>

        <div className='alert-modal'>

            <button onClick={() => {
                setAlertModal('')
            }}
                className='close-btn'>X</button>
            <h2>{alert.headline}</h2>
            <div className='alert-info'>
                <div className='event'>
                    <span className='alert-title'>Event:</span>
                    <span className='alert'>{alert.event}</span>
                </div>
                <div className='effective'>
                    <span className='alert-title'>Effective:</span>
                    <span className='alert'>{alert.effective}</span>
                </div>
                <div className='expires'>
                    <span className='alert-title'>Expires:</span>
                    <span className='alert'>{alert.expires}</span>
                </div>
                <div className='desc'>
                    <span className='alert-title'>Description:</span>
                    <span className='alert'>{alert.desc}</span>
                </div>
            </div>

        </div>
    </div>;
}
