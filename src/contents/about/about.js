import React from "react";
import './about.scss';

import {ReactComponent as Email} from '../../assets/icons/envelope.svg';
import {ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as Github} from '../../assets/icons/github.svg';

const About = () => {
    return (
        <div className="about">
            <section>
                <h2>About Me</h2>
                <p>
                    Hello! I'm Soomin, a senior student studying in the School of Art Institute of Chicago, focusing on Visual Communication Design. As a designer,  I am also interested in UI/UX design and web development. 
                </p>
            </section>

            <section>
                <h2>About My Portfolio</h2>
                <p>I will be updating this website with new projects, so check in again if you're interested! I used <a href='https://react.dev/' target='_blank'>ReactJS</a> to build this website.</p>
            </section>

            {/* <section>
                <h2>More about me</h2>
            </section> */}

            <section className="contact">
                <h2>Connect</h2>
                <div>
                    <a href='mailto:soomin2c@gmail.com'><Email /></a>
                    <a href='https://www.linkedin.com/in/ulwoos/'><Linkedin /></a>
                    <a href='https://github.com/schung-21'><Github /></a>
                </div>
            </section>
        </div>
    );
};

export default About;