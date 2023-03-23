import React from "react";
import { Link } from "react-router-dom";

const Card = ({ work }) => {
    const { title, tags, year, thumb, slug } = work;

    return (
        <Link to={'/work/' + slug} className='thumb'>
            <img src={thumb} />
            <div className="thumb-detail">
                <div className='thumb-title'>
                    <h2 className='project-title'>{title}</h2>
                    <p>{year}</p>
                </div>
                <ul className='taglist'>
                    {tags.map(tag => <li>{tag}</li>)}
                </ul>
            </div>
        </Link>
    );
};

export default Card;