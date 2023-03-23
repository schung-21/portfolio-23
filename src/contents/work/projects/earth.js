import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Earth = () => {
    const earth = useSelector((state) => state.work.work[2]);

    return (
        <div className="project">
            <Brief
                work={earth} 
                brief='Because Earth is the fundraising campaign held by the Field Museum.'
                role='Designer'
                date='March - May 2021'
            />

            <div className="project-main">
                <img className="fullscreen" src={require('../../../assets/earth/teaser.jpg')} />
                <img src={require('../../../assets/earth/poster.jpg')} />
                <ul className="cols">
                    <li><img src={require('../../../assets/earth/invitation-1.jpg')} /></li>
                    <li><img src={require('../../../assets/earth/invitation-2.jpg')} /></li>
                </ul>
                <ul className="cols">
                    <li><img src={require('../../../assets/earth/house-organ-1.jpg')} /></li>
                    <li><img src={require('../../../assets/earth/house-organ-2.jpg')} /></li>
                </ul>
            </div>
        </div>
    );
};

export default Earth;