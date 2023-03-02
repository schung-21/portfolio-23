import React from "react";

const Brief = ({ work, brief, role, date }) => {
    const {title, tags} = work;

    return (
        <div className="project-brief">
            <img src='/' />
            <h1>{title}</h1>
            <div className="info">
                <div><h3>Brief</h3><p>{brief}</p></div>
                <div><h3>My Role</h3><p>{role}</p></div>
                <div><h3>Tags</h3><ul>{tags.map(tag => <li>{tag}</li>)}</ul></div>
                <div><h3>Date</h3><p>{date}</p></div>
            </div>
        </div>
    );
};

export default Brief;