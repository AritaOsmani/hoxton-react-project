import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/MainHeader.css'

export default function MainHeader({ setSearch, currentSearch }) {
    const navigate = useNavigate()
    return <div className='main-header'>
        <h2 onClick={() => {
            navigate('/home')
        }}>WeatherApp</h2>

        {/* <i onClick={() => {
            navigate(`/home/${currentSearch}`)
        }} className="fal fa-redo"></i> */}
        <form action="" className='header-form'
            onSubmit={event => {
                event.preventDefault()
                const search = event.target.searchInput.value;
                setSearch(search)
                event.target.reset()
                navigate(`/home/${search}`)
            }}>

            <input type="text" name='searchInput' placeholder='Search for a city...' autoComplete='off' />
        </form>
    </div>;
}
