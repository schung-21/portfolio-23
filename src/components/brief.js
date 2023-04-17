import React from "react";

const Brief = ({ work, brief, role, date }) => {
    const {title, tags, wip} = work;

    return (
        <div className="project-brief">

            {wip ? <div className="wip">Work in progress</div> : ''}

            <h1>{title}</h1>

            <div className="info">
                <div className="overview"><h4>{brief}</h4></div>
                <div><h3>My Role</h3><p>{role}</p></div>
                <div className="tags"><h3>Tags</h3><ul className='taglist'>{tags.map(tag => <li>{tag}</li>)}</ul></div>
                <div className="date"><h3>Date</h3><p>{date}</p></div>
            </div>
        </div>
    );
};

export default Brief;