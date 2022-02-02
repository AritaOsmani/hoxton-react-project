import React from 'react';
import RecentSearchItem from './RecentSearchItem';

export default function RecentSearch({ recentList, setSearch, deleteSearchedCity }) {
    return <div className='recent-container'>
        <h2 className='recent-title'>Recent</h2>
        <ul className='recent-searches-list'>
            {recentList.map(citySearched => <RecentSearchItem citySearched={citySearched} setSearch={setSearch} deleteSearchedCity={deleteSearchedCity} />)}


        </ul>
    </div>;
}
