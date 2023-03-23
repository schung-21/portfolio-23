import React, { useRef } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from '../assets/icons/search.svg';

const SearchBar = () => {
    const navigate = useNavigate();

    return (
        <div className='search'>
            <input className="search-toggle" type='text' placeholder='Search...'></input>
            <button className='search-button' onClick={() => {document.querySelector('.search input').classList.toggle('search-toggle')}}>
                <Search />
            </button>
        </div>
    );
};

export default SearchBar;