import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <div className='search'>
            <input type='text' placeholder='Search...'></input>
            <button className='search-button' onClick={() => {}}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default SearchBar;