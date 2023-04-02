import React from "react";
import './about.scss';

import {ReactComponent as Email} from '../../assets/icons/envelope.svg';
import {ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as Github} from '../../assets/icons/github.svg';

const About = () => {
    return (
        <div className="about">
            <section>
                {/* <div className='profile'>
                    <img id='icon1' src={require('../../assets/about/profile1.png')} alt='profile' />
                </div> */}
                <h2>About Me</h2>
                <p>
                    Hello! I'm Soomin, a designer based in Chicago. I'm currently a senior student studying in the School of Art Institute of Chicago, focusing on Visual Communication Design. I am also interested in front-end web development, usually working with React.js.
                    <br/><br/>
                    In my free time, I enjoy watching sci-fi movies and brewing coffee.
                </p>
            </section>

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