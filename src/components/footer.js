import React from 'react';

import {ReactComponent as Email} from '../assets/icons/envelope.svg';
import {ReactComponent as Linkedin} from '../assets/icons/linkedin.svg';
import {ReactComponent as Github} from '../assets/icons/github.svg';

const Footer = () => {
    return (
        <footer>
            <p>© 2023 Soomin Chung</p>
            <div className='contacts'>
                <a href='mailto:soomin2c@gmail.com' target='_blank'>
                    <Email />
                    <div className='tooltip'>soomin2c@gmail.com</div>
                </a>
                <a href='https://www.linkedin.com/in/ulwoos/'  target='_blank'>
                    <Linkedin />
                    <div className='tooltip'>ulwoos</div>
                </a>
                <a href='https://www.github.com/schung-21'  target='_blank'>
                    <Github />
                    <div className='tooltip'>schung-21</div>
                </a>
            </div>
        </footer>
    )
};

export default Footer;