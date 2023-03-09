import React from "react";
import { useSelector } from "react-redux";
import Card from '../../components/card';
import './work.scss';

const Work = () => {
    const works = useSelector((state) => state.work.work);

    return (
        <>
            <div className="intro">
                <h3></h3>
            </div>
            <div className='work'>
                {works.map((work) => <Card work={work}/>)}
            </div>
        </>
    );
};

export default Work;