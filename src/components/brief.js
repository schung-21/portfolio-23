import React from "react";

const Brief = ({ name, work, brief, role, date }) => {
    const {title, tags, thumb} = work;

    return (
        <div className="project-brief">
            <div className="thumb-container">
                <img src={thumb} />
            </div>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div className="info">
                <div className="overview"><h3>Overview</h3><p>{brief}</p></div>
                <div><h3>My Role</h3><p>{role}</p></div>
                <div className="tags"><h3>Tags</h3><ul className='taglist'>{tags.map(tag => <li>{tag}</li>)}</ul></div>
                <div className="date"><h3>Date</h3><p>{date}</p></div>
            </div>
        </div>
    );
};

export default Brief;