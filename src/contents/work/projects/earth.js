import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Earth = () => {
    const earth = useSelector((state) => state.work.work[2]);

    return (
        <div className="project">
            <Brief
                work={earth} 
                brief='Because Earth is the fundraising campaign held by the Field Museum. I designed the collaterals for the campaign that emphasize their passion for natural science, using detailed illustrations representing their study and collection.'
                role='Designer, Student'
                date='March - May 2021'
            />

            <div className="project-main">
                <img className="fullscreen" src={require('../../../assets/earth/teaser.jpg')} />
                <h3>Poster</h3>
                <img src={require('../../../assets/earth/poster.jpg')} />
                <h3>Invitation</h3>
                <ul className="cols">
                    <li><img src={require('../../../assets/earth/invitation-1.jpg')} /></li>
                    <li><img src={require('../../../assets/earth/invitation-2.jpg')} /></li>
                </ul>
                <h3>Tickets</h3>
                <img src={require('../../../assets/earth/ticket-1.jpg')} />
                <img src={require('../../../assets/earth/ticket-2.jpg')} />
                <img src={require('../../../assets/earth/ticket-3.jpg')} />
                <h3>House Organ</h3>
                <ul className="cols">
                    <li><img src={require('../../../assets/earth/house-organ-1.jpg')} /></li>
                    <li><img src={require('../../../assets/earth/house-organ-2.jpg')} /></li>
                </ul>
                <h3>Special Takeaways: Book</h3>
                <img src={require('../../../assets/earth/book.png')} />
            </div>
        </div>
    );
};

export default Earth;