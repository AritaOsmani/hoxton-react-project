import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm({ setSearch }) {

    const navigate = useNavigate()

    return <form action="" className='search-form'
        onSubmit={event => {
            event.preventDefault()
            const searchVal = event.target.search.value;
            setSearch(searchVal)
            navigate('/main')
            event.target.reset()
        }}>
        <input name='search' type="text" placeholder='Search...' required />
        <button className='search-btn'><i className="fal fa-search"></i></button>
    </form>
}
