import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from './themeSlice';

const Theme = () => {
    const theme = useSelector((state) => state.theme.dark);
    const dispatch = useDispatch();

    return (
        <button
            id='theme-button'
            aria-label='Toggle dark mode' 
            onClick={() => dispatch(toggle())}
        >
            {theme ? 'dark' : 'light'}
        </button>
    );
};

export default Theme;