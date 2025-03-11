import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <>
        <div className='footer-parent'>
        <div className="footer-section">
            <video className='footer-video' src="https://framerusercontent.com/assets/RsAriLZGy8MSNSNwh3jj19nfjw.mp4"></video>
            <div className='footer-container'>
                <h1>Paste</h1> <br />
                <div className='footer-content'>
                    <p>Try for free</p> <br />
                    <p>Get on Setapp</p> <br />
                    <p>Use cases</p> <br />
                    <p>Updates</p> <br />
                    <p>Pricing</p>
                </div>
            </div>
            <div className='footer-container'>
                <h1>Resources</h1> <br />
                <div className='footer-content'>
                    <p>Help & support</p> <br />
                    <p>Blog</p> <br />
                    <p>Terms of use</p> <br />
                    <p>Privacy police</p>
                </div>
            </div>
            <div className='footer-container'>
                <h1>More</h1> <br />
                <div className='footer-content'>
                    <p>About</p> <br />
                    <p>Contact</p> <br />
                    <p>Beta program</p> <br />
                    <p>Suggest a feature</p>
                </div>
            </div>
            <div className='footer-container'>
                <h1>Follow us</h1> <br />
                <div className='footer-content'>
                    <img src="https://framerusercontent.com/modules/Ha5LC44Kej1N9mT588s8/Fg0PGPIS9yiHmX80vQVX/assets/0r6IHdgzqImGvEMg7sgrAE8ZkQ.svg" />
                    <img src="https://framerusercontent.com/modules/Ha5LC44Kej1N9mT588s8/Fg0PGPIS9yiHmX80vQVX/assets/TSw0SN3gJzyYIUBFqbAhSN2ss.svg" />
                </div>
            </div>
        </div>
        <div className='footer-line'></div>
        <div className='footer-bottom'>
            <p>© 2025 Paste Team ApS. All rights reserved.</p>
            <p>All trademarks are the property of their respective owners.</p>
        </div>
        </div>
        </>
    );
}

export default Footer;