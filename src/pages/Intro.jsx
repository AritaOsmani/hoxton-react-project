import React from 'react';
import SearchForm from '../components/Intro/SearchForm';
import Title from '../components/Intro/Title';

export default function Intro({ setSearch }) {
    return <div className='intro-container'>
        <Title />
        <SearchForm setSearch={setSearch} />
    </div>;
}
