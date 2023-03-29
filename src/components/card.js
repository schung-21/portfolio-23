import React from "react";
import { Link } from "react-router-dom";

const Card = ({ work }) => {
    const { title, tags, year, thumb, slug } = work;

    return (
        <Link to={'/' + slug} className='thumb'>
            <img src={thumb} alt={title} />
            <div className="thumb-detail">
                <div className='thumb-title'>
                    <h2 className='project-title'>{title}</h2>
                    <p>{year}</p>
                </div>
                <ul className='taglist'>
                    {tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        </Link>
    );
};

export default Card;