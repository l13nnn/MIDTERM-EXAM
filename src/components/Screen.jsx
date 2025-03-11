import React from "react";
import '../styles/Screen.css';
import Image from '../assets/WhatsApp Image 2025-03-11 at 10.48.48_41503eec.jpg';

function Screen() {
    return (
        <>
        <div className="screen-section">
            <div className="screen-container">
                <div className="screen-image">
                    <img src={Image} />
                </div>
                <div className="screen-text">
                    <br /> <p>Try Paste today and see the difference it can make in streamlining your workflow. <br /> Empower yourself and take control of your productivity journey.</p>
                </div>
                <div className="screen-frame">
                    <div className="screen-download">
                        <img src="https://framerusercontent.com/modules/qvgkLgoRjIt5bb9FhrVe/ogn9RsQ5hhjsAj6I17SW/assets/hbMG56UDdBsAaOugIyODdGih8IA.svg" />
                        <p>Download on <br /> App Store</p>
                    </div>
                    <div className="screen-download-2">
                        <img src="https://framerusercontent.com/modules/qvgkLgoRjIt5bb9FhrVe/ogn9RsQ5hhjsAj6I17SW/assets/WgbGvRVdFPqFB713033ODp0cJOI.svg" />
                        <p>Download on <br /> Setapp</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Screen;