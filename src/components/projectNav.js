import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectNav = ({ prev, next }) => {

    const thumb = useSelector(state => state.work.work);

    return (
        <div className='navigate'>
            <a href={prev}>Previous Project</a> 
            <a href={next}>Next Project</a>
        </div>
    );
};

export default ProjectNav;