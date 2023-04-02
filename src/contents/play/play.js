import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import './play.scss';

const Play = () => {
    const play = useSelector(state => state.play.play);

    return (
        <>
            <div className="play-container"><Outlet /></div>
            <div className="play-intro">
                <h3>This is a collection of smaller projects and personal works.<br/>Click the images to learn more. Enjoy!</h3>
            </div>
            <div className='play'>
                {play.map(
                    (work, i) => 
                    <Link to={work.slug} className='play-thumb' key={i}>
                        <img src={work.thumb} alt='' />
                    </Link>
                )}
            </div>
        </>
    );
};

export default Play;