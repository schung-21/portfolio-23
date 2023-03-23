import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Dsmith = () => {
    const dsmith = useSelector((state) => state.work.work[3]);

    return (
        <div className='project'>
            <Brief 
                work={dsmith} 
                brief='David Smith is an American painter and sculptor' 
                role='Designer'
                date='March - April 2021 (1 month)'
            />

            <div className="project-main">
                <img className="fullscreen" src={require('../../../assets/dsmith/page-1.png')} />
                <img src={require('../../../assets/dsmith/cover.png')} />
                <img src={require('../../../assets/dsmith/page-2.png')} />
                <img src={require('../../../assets/dsmith/page-3.png')} />
            </div>
        </div>
    );
};

export default Dsmith;