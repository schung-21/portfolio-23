import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNav = ({ prev, next }) => {

    return (
        <div className='navigate'>
            {prev ? <Link to={prev}>Previous Project</Link> : ''}
            
            {next ? <Link to={next}>Next Project</Link> : ''}
        </div>
    );
};

export default ProjectNav;