import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Dsmith = () => {
    const dsmith = useSelector((state) => state.work.work[3]);

    return (
        <div className='project'>
            <Brief 
                work={dsmith} 
                brief='David Smith was one of the pioneers of welded metal sculptures. I made an art book about him and his art practices, utilizing his iconic painted geometric forms into the typography.' 
                role='Designer, Student'
                date='March - April 2021 (1 month)'
            />

            <div className="project-main">
                <img className="fullscreen" src={require('../../../assets/dsmith/page-1.png')} alt='' />
                <img src={require('../../../assets/dsmith/cover.png')} alt='' />
                <img src={require('../../../assets/dsmith/page-2.png')} alt='' />
                <img src={require('../../../assets/dsmith/page-3.png')} alt='' />
            </div>
        </div>
    );
};

export default Dsmith;