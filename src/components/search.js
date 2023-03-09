import React from "react";
import {ReactComponent as Search} from '../assets/icons/search.svg';

const SearchBar = () => {
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