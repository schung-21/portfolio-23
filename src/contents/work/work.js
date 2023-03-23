import React from "react";
import { useSelector } from "react-redux";
import Card from '../../components/card';
import './work.scss';

const Work = () => {
    const works = useSelector((state) => state.work.work);

    return (
        <>
            <div className="intro">
                {/* <h3>Hey! I'm Soomin.<br/>I am a designer based in Chicago,<br/>currently looking for an internship.</h3> */}
            </div>
            <div className='work'>
                {works.map((work) => <Card work={work}/>)}
            </div>
        </>
    );
};

export default Work;