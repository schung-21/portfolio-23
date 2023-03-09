import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Artbash = () => {
    const artbash = useSelector((state) => state.work.work[0]);

    return (
        <div className="project">
            <Brief
                name='ArtBash 2023'
                work={artbash} 
                brief='Department of Contemporary Practices commissioned the Visual Communication Design students to create an identity and promotional materials for ArtBash, the freshman art exhibition. '
                role='Designer (solo work)'
                date='September - November 2022 (3 months)'
            />

            <ul className='project-toc'>
                <li><a href='#ideas'>Ideas</a></li>
                <li><a href='#concept'>Concept</a></li>
                <li><a href='#iterations'>Iterations</a></li>
                <li><a href='#outcomes'>Outcomes</a></li>
            </ul>

            <div className='project-main'>
                <section id='ideas'>
                    <h2>Brainstorming Ideas</h2>
                    <h3>Keywords</h3>
                    <div className='cols'>
                        <div>
                            <h4>Contemporary Practices</h4>
                            <ul>
                                <li>Interdisciplinary</li>
                                <li>Variety</li>
                                <li>Exploration</li>
                                <li>Growth</li>
                                <li>Experiments</li>
                                <li>Creation</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Freshmen Year</h4>
                            <ul>
                                <li>Excitement</li>
                                <li>Unique</li>
                                <li>Potential</li>
                                <li>Discovery</li>
                                <li>Adventure</li>
                                <li>Beginning</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id='concept'>
                    <h2>Concept</h2>
                    <p>Description</p>
                    <ul className='cols'>
                        <li><img src={require('../../../assets/artbash/sketch1.png')} /></li>
                        <li><img src={require('../../../assets/artbash/sketch2.png')} /></li>
                    </ul>
                    <h3>Color and Typography</h3>
                    <p>Description</p>
                </section>

                <section id='iterations'>
                    <h2>Design Iterations</h2>
                    <h3>Event Posters</h3>
                    <p>Description</p>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/process1.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process2.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process3.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-sitesight.png')} /></li>
                    </ul>
                    <h3>Main Poster</h3>
                    <p>Description</p>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/process4.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process5.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process6.png')} /></li>
                        <li><img src={require('../../../assets/artbash/process7.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-1main.png')} /></li>
                    </ul>
                </section>

                <section id='outcomes'>
                    <h2>Final Outcomes</h2>
                    <h3>Main Poster</h3>
                    <img src={require('../../../assets/artbash/poster-1main.png')} />
                    <p>Description</p>

                    <h3>Event Posters</h3>
                    <ul className="cols">
                        <li><img src={require('../../../assets/artbash/poster-blackbox.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-interaction.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-sitesight.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-bookarts.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-482412.png')} /></li>
                        <li><img src={require('../../../assets/artbash/poster-opencall.png')} /></li>
                    </ul>
                    <p>Description</p>

                    <h3>Instagram Posts</h3>
                    <p>Description</p>
                    
                    <h3>Instagram Filters</h3>
                    <p>Description</p>
                </section>
            </div>

            <div className='project-navigate'>
            </div>
        </div>
    );
};

export default Artbash;