import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecentSearchItem({ citySearched, setSearch }) {
    const navigate = useNavigate()
    return <li className='recent-search-list-item'
        onClick={() => {
            setSearch(citySearched.city)
            navigate(`/home/${citySearched.city}`)
        }}>
        <span className='city-name'>{`${citySearched.city},${citySearched.country}`}</span>
        <div className='recent-search-info'>
            <span className='recent-current-temp'>{`${citySearched.temp}°`}</span>
            <img src={citySearched.icon} alt="" />
        </div>
        <span>{citySearched.text}</span>
    </li>
}
