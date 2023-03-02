import React from "react";

const Brief = ({ name, work, brief, role, date }) => {
    const {title, tags, thumb} = work;

    return (
        <div className="project-brief">
            <img src={thumb} />
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div className="info">
                <div><h3>Overview</h3><p>{brief}</p></div>
                <div><h3>My Role</h3><p>{role}</p></div>
                <div><h3>Tags</h3><ul>{tags.map(tag => <li>{tag}</li>)}</ul></div>
                <div><h3>Date</h3><p>{date}</p></div>
            </div>
        </div>
    );
};

export default Brief;