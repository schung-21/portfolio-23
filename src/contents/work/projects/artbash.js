import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Brief from "../../../components/brief";

window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`ul li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`ul li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });
  
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});

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
                    <p>I started off with listing the keywords related to the <em>ArtBash</em> to brainstorm ideas for its identity.</p>
                </section>

                <section id='concept'>
                    <h2>Concept</h2>
                    <p>Description</p>
                    <ul className='cols small'>
                        <li><img src={require('../../../assets/artbash/sketch1.png')} /></li>
                        <li><img src={require('../../../assets/artbash/sketch2.png')} /></li>
                    </ul>

                    <h3>Concept Statement</h3>
                    <p>Students in the Contemporary Practices department use a wide range of media, techniques, and concepts in order to create their artworks. There are infinite possibilities where each student has their own, unique ideas. It feels like each student creates and develops their own universe, and expresses their universe through their works. Using the imagery of the universe, the <em>ArtBash 2023</em> posters represent the wide variety, uniqueness, and endless potential of the Contemporary Practices students and their art practices.</p>
                </section>

                <section id='iterations'>
                    <h2>Design Iterations</h2>
                    <p>I made a lot of iterations before the final posters. I started with minimal design with flat shapes and bold typography. Then I started working with the details and applied different colors and styles so that it conveys the concept more effectively. In the third iteration of the event posters, I tried a more direct way of showing the concept using the blueprint style. <br/><br/> After deciding on the final style with the event posters, I moved on to the main poster by combining the images from each event posters.</p>

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
                    <p>Description</p>

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
                    <p>Description</p>

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
                    <p>Description</p>

                    <h3>Instagram Filters</h3>
                    <p>Description</p>
                </section>
            </div>

            <div className='navigate'>
                <Link to='/'>Previous Project</Link>
                <Link to='/work/mca-identity'>Next Project</Link>
            </div>
        </div>
    );
};

export default Artbash;