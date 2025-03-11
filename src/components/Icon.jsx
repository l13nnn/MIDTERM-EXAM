import React from "react";
import '../styles/Icon.css';
import Image from '../assets/WhatsApp Image 2025-03-11 at 12.35.08_5f6215b7.jpg';

function Icon() {

    return (
        <>
            <div className='icon-parent'>
                <div className='icon-text-cotainer'>
                    <div className='icon-text'>
                        <h1>New Icon <br /> <span className="icon-text-span">Evolving Impressions</span></h1>
                    </div>
                    <div className="icon-text-2">
                        <p>We've breathed new life into our visual identity, refreshing the icons with <br /> modern aesthetics that personify elegance and sophistication.</p> <br />
                    </div>
                </div>
                <div className="icon-image">
                    <img src={Image} />
                </div>
            </div>
        </>
    );
}

export default Icon;