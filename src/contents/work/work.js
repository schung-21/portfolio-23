import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './work.scss';

const Work = () => {
    const works = useSelector((state) => state.work.work);

    return (
        <>
            <div className="intro">
                <h3>introduction<br/>introduction<br/>introduction<br/>introduction</h3>
            </div>
            <div className='work'>
                {Object.keys(works).map((work, i) => 
                    <Link to={'/work/' + works[work].slug} className='thumb' key={i}>
                        <div className="thumb-title">
                            <h2 className='project-title'>{works[work].title}</h2>
                            <p>{works[work].year}</p>
                        </div>
                        <ul className='taglist'>
                            {works[work].tags.map(tag => <li>{tag}</li>)}
                        </ul>
                        <div className="thumb-image">
                            <img src={works[work].thumb} />
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
};

export default Work;