import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Email} from '../assets/icons/envelope.svg';
import {ReactComponent as Instagram} from '../assets/icons/instagram.svg';
import {ReactComponent as Linkedin} from '../assets/icons/linkedin.svg';
import {ReactComponent as Github} from '../assets/icons/github.svg';

const Footer = () => {
    return (
        <footer>
            <div className='footer-nav'>
                <h3>Soomin Chung</h3>
                <Link href='/'>work</Link>
                <Link href='/play'>play</Link>
                <Link href='/about'>about</Link>
            </div>
            <div className='contact'>
                <h3>Contact Me</h3>
                <a href='mailto:schung21@saic.edu' target='_blank'><Email className='icon social' />soomin2c@gmail.com</a>
                <div className='social'>
                    <a className="icon social" href="https://www.instagram.com/ulw.oos/" target='_blank'><Instagram /></a>
                    <a className="icon social" href='https://www.linkedin.com/in/ulwoos/' target='_blank'><Linkedin /></a>
                    <a className="icon social" href="https://github.com/schung-21" target='_blank'><Github /></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;