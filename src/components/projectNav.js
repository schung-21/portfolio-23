import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectNav = ({ prev, next }) => {

    const thumb = useSelector(state => state.work.work);

    return (
        <div className='navigate'>
            <Link to={prev}>Previous Project</Link> 
            <Link to={next}>Next Project</Link>
        </div>
    );
};

export default ProjectNav;