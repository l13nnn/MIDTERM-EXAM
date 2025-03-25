import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Look.css';

gsap.registerPlugin(ScrollTrigger);

function Look() {
    const lookContainer = useRef(null);
    const lookImage1 = useRef(null);
    const lookImage2 = useRef(null);
    const lookImage3 = useRef(null);

    useEffect(() => {
        gsap.fromTo(
          lookContainer.current,
          {
            y: 0,
          },
          {
            y: -200,
            duration: 1,
            scrollTrigger: {
              trigger: lookContainer.current,
              start: "top 100%",
              end: "bottom 10%",
              scrub: true,
            },
          }
        );
    
        gsap.fromTo(
          lookImage1.current,
          { scale: 1 },
          {
            scale: 0.5,
            duration: 1,
            scrollTrigger: {
              trigger: lookContainer.current,
              start: "top 100%",
              end: "bottom 90%",
              scrub: true,
            },
          }
        );
    
        gsap.fromTo(
          lookImage2.current,
          { x: -200 },
          {
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: lookContainer.current,
              start: "top 100%",
              end: "bottom 90%",
              scrub: true,
            },
          }
        );
    
        gsap.fromTo(
          lookImage3.current,
          { x: 500 },
          {
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: lookContainer.current,
              start: "top 90%",
              end: "bottom 90%",
              scrub: true,
            },
          }
        );
      }, []);    

    return (
        <>
            <div className='look-container' ref={lookContainer}>
                <div className='look-text'>
                    <h1>New Look. New Feel. <br /> <span className='look-text-span'>All-New Paste</span></h1>
                </div>
                <div className='look-text-2'>
                    <p>Discover unprecedented efficiency with our most advanced, intuitive, <br /> and user-centric update yet.</p>
                </div>
                <div className='look-image'>
                    <img className='look-image-1' ref={lookImage1} src="https://framerusercontent.com/images/XhrkXBnHJaTWtrEjq133BhtBg.png" />
                    <img className='look-image-2' ref={lookImage2} src="https://framerusercontent.com/images/MFsNIGZmcW4MYnZCHCETuFIL9tc.png" />
                    <img className='look-image-3' ref={lookImage3} src="https://framerusercontent.com/images/5wZGXwxBjkqvElgRafMjIwVrAk.png" />
                </div>
            </div>
        </>
    )

}

export default Look;