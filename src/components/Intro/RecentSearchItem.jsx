import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecentSearchItem({ citySearched, setSearch, deleteSearchedCity }) {
    const navigate = useNavigate()
    return <li className='recent-search-list-item'
        onClick={() => {
            setSearch(citySearched.city)
            navigate(`/home/${citySearched.city}`)
        }}>
        <button onClick={(e) => {
            e.stopPropagation()
            deleteSearchedCity(citySearched)
        }}
            className='recent__close-btn'>X</button>
        <span className='city-name'>{`${citySearched.city}, ${citySearched.country}`}</span>
        <div className='recent-search-info'>
            <span className='recent-current-temp'>{`${citySearched.temp}°`}</span>
            <img src={citySearched.icon} alt="" />
        </div>
        <span className='recent-text'>{citySearched.text}</span>
    </li>
}
