import React from 'react';
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";
import ProjectNav from '../../../components/projectNav';

const Ikea = () => {
    const ikea = useSelector(state => state.work.work[5]);

    return (
        <div className='project'>
            <Brief
                work={ikea} 
                brief='' 
                role='Art Director, Student'
                date='February - May 2023'
            />

            <ProjectNav prev='/beer' next='/self-service' />
        </div>
    )
};

export default Ikea;