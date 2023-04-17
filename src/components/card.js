import React from "react";

const Card = ({ work }) => {
    const { title, tags, year, thumb, slug, wip } = work;

    return (
        <a href={wip ? '#' : '/' + slug} className='thumb'>
            {wip ? <div className='wip'>Coming Soon</div> : ''}
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
        </a>
    );
};

export default Card;