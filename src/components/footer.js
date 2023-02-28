import React from "react";
import { Link } from "react-router-dom";

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
                <a href='mailto:schung21@saic.edu' target='_blank'>schung21@saic.edu</a>
                {/* <a href='https://www.instagram.com/ulw.oos/' target='_blank'>Instagram</a> */}
                <a href='https://www.linkedin.com/in/schung21/' target='_blank'>LinkedIn</a>
            </div>
        </footer>
    )
};

export default Footer;