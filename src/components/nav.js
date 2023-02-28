import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './search';
import Theme from '../contents/theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <>
        <button id='mobile-nav' onClick={() => {}}>
            <FontAwesomeIcon icon={faBars} />
        </button>
        <nav>
            <NavLink 
                to='/'
                className={({ isActive }) => isActive ? 'active' : ''}
            >work</NavLink>
            <NavLink 
                to='/play'
                className={({ isActive }) => isActive ? 'active' : ''}
            >play</NavLink>
            <NavLink 
                to='/about'
                className={({ isActive }) => isActive ? 'active' : ''}
            >about</NavLink>

            <SearchBar />
            {/* <Theme /> */}
        </nav>
        </>
    );
};

export default Navigation;