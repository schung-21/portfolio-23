import React from 'react';
import { NavLink } from 'react-router-dom';
// import SearchBar from './search';
// import Theme from '../contents/theme/theme';
import {ReactComponent as Bars} from '../assets/icons/bars.svg';

const Navigation = () => {
    return (
        <>
        <button id='mobile-nav' onClick={() => {
            document.querySelector('nav').classList.toggle('toggle-nav');
            document.querySelector('header').classList.toggle('toggle-head');
            document.querySelector('main').classList.toggle('toggle-bg');
        }}>
            <Bars />
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

            {/* <SearchBar /> */}
            {/* <Theme /> */}
        </nav>
        </>
    );
};

export default Navigation;