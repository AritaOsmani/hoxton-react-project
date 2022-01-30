import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainHeader({ setSearch }) {
    const navigate = useNavigate()
    return <div className='main-header'>
        <h2>WeatherApp</h2>
        <form action="" className='header-form'
            onSubmit={event => {
                event.preventDefault()
                const search = event.target.searchInput.value;
                setSearch(search)
                event.target.reset()
                navigate(`/home/${search}`)
            }}>
            <input type="text" name='searchInput' placeholder='Search for a city...' />
        </form>
    </div>;
}
