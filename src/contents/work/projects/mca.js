import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Mca = () => {
    const mca = useSelector((state) => state.work.work[1]);

    return (
        <div className='project'>
            <Brief 
                work={mca} 
                brief='MCA Chicago is a contemporary art museum where experiments and new ideas are celebrated. I redesigned their brand identity to capture thier versatility and innovation.'
                role='Designer, Student'
                date='October - December 2021 (3 months)'
            />

            <div className="project-main">
                <img className="fullscreen" src={require('../../../assets/mca/logo-1.png')} />
                <h3>Logo</h3>
                <img src={require('../../../assets/mca/logo-2.png')} />
                <img src={require('../../../assets/mca/logo-3.png')} />

                <h3>Stationery</h3>
                <img src={require('../../../assets/mca/business-card.png')} />
                <img src={require('../../../assets/mca/stationery.png')} />

                <h3>Posters</h3>
                <ul className="cols">
                    <li><img src={require('../../../assets/mca/poster-1.png')} /></li>
                    <li><img src={require('../../../assets/mca/poster-2.png')} /></li>
                    <li><img src={require('../../../assets/mca/poster-3.png')} /></li>
                </ul>

                <h3>Website</h3>
                <img src={require('../../../assets/mca/website.png')} />
            </div>
        </div>
    );
};

export default Mca;