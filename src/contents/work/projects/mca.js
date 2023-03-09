import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Brief from "../../../components/brief";

const Mca = () => {
    const mca = useSelector((state) => state.work.work[1]);

    return (
        <div className='project'>
            <Brief 
                name='MCA Chicago' 
                work={mca} 
                brief='' 
                role='Designer (solo work)'
                date='October - December 2021 (3 months)'
            />
        </div>
    );
};

export default Mca;