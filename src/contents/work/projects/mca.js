import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Mca = () => {
    const mca = useSelector((state) => state.work.work[1]);

    return (
        <div className='project'>
            <Brief 
                work={mca} 
                brief='MCA is a contemporary art museum located in Chicago.' 
                role='Designer'
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
                <img src={require('../../../assets/mca/poster.png')} />

                <h3>Website</h3>
                <img src={require('../../../assets/mca/website.png')} />
            </div>
        </div>
    );
};

export default Mca;