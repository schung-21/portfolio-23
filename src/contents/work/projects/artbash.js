import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";
import ProjectNav from '../../../components/projectNav';

const Artbash = () => {
    const artbash = useSelector((state) => state.work.work[0]);

    return (
        <div className="project">
            <Brief
                work={artbash} 
                brief='Department of Contemporary Practices commissioned the Visual Communication Design students to create an identity and promotional materials for ArtBash, the freshman art exhibition. There are infinite possibilities where each student has their own, unique ideas. Using the imagery of the universe, the ArtBash 2023 posters represent the wide variety, uniqueness, and endless potential of the Contemporary Practices students and their art practices.'
                role='Designer'
                date='September - November 2022 (3 months)'
            />

            <div className='project-main'>
                <section id='overview'>
                    <img className="fullscreen" src={require('../../../assets/artbash/poster-1main.png')} />
                </section>

                <section id='concept'>
                    <h2>Ideas & Concept</h2>
                    <ul className='cols small'>
                        <li><img src={require('../../../assets/artbash/sketch1.png')} /></li>
                        <li><img src={require('../../../assets/artbash/sketch2.png')} /></li>
                    </ul>

                    <h3>Concept Statement</h3>
                    <p>Students in the Contemporary Practices department use a wide range of media, techniques, and concepts in order to create their artworks. There are infinite possibilities where each student has their own, unique ideas. It feels like each student creates and develops their own universe, and expresses their universe through their works. Using the imagery of the universe, the <em>ArtBash 2023</em> posters represent the wide variety, uniqueness, and endless potential of the Contemporary Practices students and their art practices.</p>
                </section>

                <section id='iterations'>
                    <h2>Iterations</h2>
                    <p>I made a lot of iterations before the final posters. I started with minimal design with flat shapes and bold typography. Then I started working with the details and applied different colors and styles so that it conveys the concept more effectively. In the third iteration of the event posters, I tried a more direct way of showing the concept using the blueprint style.</p>

                    <h3>Event Posters</h3>
                    <ul className="cols col4">
                        <li><img src={require('../../../assets/artbash/process1.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process2.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process3.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-sitesight.png')} /></li>
                    </ul>
                    <h3>Main Poster</h3>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/process4.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process5.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process6.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process7.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-1main.png')} /></li>
                    </ul>
                </section>

                <section id='outcomes'>
                    <h2>Final Outcome</h2>
                    <h3>Main Poster</h3>
                    <img src={require('../../../assets/artbash/poster-1main.png')} />

                    <h3>Event Posters</h3>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/poster-blackbox.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-interaction.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-sitesight.png')} /></li>
                    </ul>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/poster-bookarts.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-482412.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-opencall.png')} /></li>
                    </ul>

                    <h3>Instagram Posts</h3>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/ig-blackbox.png')} /></li>
                        <li><img src={require('../../../assets/artbash/ig-interaction.png')} /></li>
                        <li><img src={require('../../../assets/artbash/ig-sitesight.png')} /></li>
                    </ul>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/ig-bookarts.png')} /></li>
                        <li><img src={require('../../../assets/artbash/ig-482412.png')} /></li>
                        <li><img src={require('../../../assets/artbash/ig-opencall.png')} /></li>
                    </ul>
                </section>
            </div>

            <ProjectNav next='/work/mca' />
        </div>
    );
};

export default Artbash;