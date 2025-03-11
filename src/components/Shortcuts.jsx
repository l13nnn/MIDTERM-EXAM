import React from 'react';
import '../styles/Shortcuts.css';

function Shortcuts() {

    return (
        <>
        <div className='shortcuts-section'>
            <div className='shortcuts-container'>
                <div className='shortcuts-text'>
                    <h1>More Shortcuts <br /> <span className='shortcuts-text-span'>Effortless Navigation</span></h1>
                </div>
                <div className='shortcuts-text-2'>
                    <p>With an expanded range of shortcuts, navigating Paste is more efficient, <br />empowering you to perform actions with ease.</p> <br />
                </div>
                <div className='shortcuts-image'>
                    <img style={{width: '70%', height: '20%', borderRadius: '20px'}} src="https://framerusercontent.com/images/mBcZ5ndknAVxjygEWmpuxF5RtU.jpg" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Shortcuts;