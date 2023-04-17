import React from 'react';
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";
import ProjectNav from '../../../components/projectNav';

const SelfService = () => {
    const selfservice = useSelector(state => state.work.work[6]);

    return (
    <div className='project'>
        <Brief
            work={selfservice}
            brief="Self Service is a platform used by SAIC to manage academic information. Students can register for classes and view financial aid information. I redesigned the class registration experience in Self Service in a way that suites SAIC students' needs."
            role='Designer'
            date='March - April 2023'
        />
        <ProjectNav prev='/ikea' next='/artbash' />
    </div>
    );
};

export default SelfService;