import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './error.scss';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className='error'>
            <div>
                <h1>404 🥲</h1>
                <p>Sorry, I can't find the page you're looking for.</p>
            </div>
            <div className='suggested'>
            </div>
            <button className='primary' onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default Error;