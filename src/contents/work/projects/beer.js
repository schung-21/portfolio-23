import React from 'react';
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Beer = () => {
    const beer = useSelector((state) => state.work.work[4]);

    return(
        <div className='project'>
            <Brief
                work={beer}
                brief={<>I participated in the GDG Campus Korea's summer hackathon as a designer. Our team created a web service that allows you to search and review drinks. The name of our service, <em>Beer</em>, sounds similar to the Korean word "empty (the bottle)." It was a quick-paced project, which took 24 hours from brainstorming ideas to final product.</>}
                role='Designer'
                date='June 24-25, 2022'
            />
            <div className='project-main'>
                <img className='fullscreen' src={require('../../../assets/beer/logo.png')} alt='' />
                <ul className='cols'>
                    <li><img src={require('../../../assets/beer/home.png')} alt='' /></li>
                    <li><img src={require('../../../assets/beer/search.png')} alt='' /></li>
                    <li><img src={require('../../../assets/beer/detail.png')} alt='' /></li>
                </ul>
                <ul className='cols'>
                <li><img src={require('../../../assets/beer/review.png')} alt='' /></li>
                <li><img src={require('../../../assets/beer/upload.png')} alt='' /></li>
                <li><img src={require('../../../assets/beer/account.png')} alt='' /></li>
                </ul>
            </div>
        </div>
    );
};

export default Beer;