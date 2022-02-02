import React from 'react';
import { useState } from 'react/cjs/react.development';
import AlertModal from '../pages/AlertModal';
import '../styles/Alert.css'

export default function Alert({ alert }) {
    const [alertModal, setAlertModal] = useState('')
    return <div className='alert-container'>
        {alertModal !== '' && <AlertModal alert={alert} setAlertModal={setAlertModal} />}
        {alert.event}
        <i onClick={() => {
            setAlertModal('alert')
        }}
            className="fas fa-chevron-right"></i>
    </div>;
}
