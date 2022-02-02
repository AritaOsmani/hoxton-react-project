import React from 'react';
import RecentSearch from '../components/Intro/RecentSearch';
import SearchForm from '../components/Intro/SearchForm';
import Title from '../components/Intro/Title';

export default function Intro({ setSearch, recentList }) {

    return <div className='intro-container'>
        <Title />
        <SearchForm setSearch={setSearch} />
        <RecentSearch recentList={recentList} setSearch={setSearch} />
    </div>;
}
