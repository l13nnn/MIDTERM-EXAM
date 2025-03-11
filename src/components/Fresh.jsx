import {useEffect} from 'react';
import '../styles/Fresh.css';
import gsap from 'gsap';

function Fresh() {

    const images = [
        "https://framerusercontent.com/images/j2KSfMROOnRMxthTZTxFhWU2ZEk.png",
        "https://framerusercontent.com/images/LRW8TpgnamqDbqIeLH4YFIizo.png",
        "https://framerusercontent.com/images/MHdRNTvXt7C56gNdk7vxdhhVUMQ.png",
        "https://framerusercontent.com/images/tjFslIrii2zAbgwpgv88acKX94.png",
        "https://framerusercontent.com/images/mOjeWW0R85ST6vSbp4NsqVp21k.png",
        "https://framerusercontent.com/images/QHkLOR1e2hPGvIhTMAOeLf0iiI.png",
        "https://framerusercontent.com/images/BaoJlOV474hfTXenp7mqpGnN7A.png",
        "https://framerusercontent.com/images/BuegvK1yhbKVL0nuVa01UneIrU.png",
        "https://framerusercontent.com/images/Oc81fd2Au71f2UmpMtKlhZcQcj0.png",
        "https://framerusercontent.com/images/EWguGk5v4KfiMZIncNMoVZyUfF4.png",
        "https://framerusercontent.com/images/zVEmxPBCyTF0qlp2x4NnROYZvM.png",
        "https://framerusercontent.com/images/eHdMlQZUjVqhhiT0dZE8onugIc0.png",
        "https://framerusercontent.com/images/oIWj5rD83R2smndIfKHeVdv5A.png"
    ]

    useEffect(() => {
        const images = document.querySelectorAll(".fresh-image");
    
        images.forEach((image) => {
          const handleEnter = () => {
            gsap.to(image, { y: -100});
          };
    
          const handleLeave = () => {
            gsap.to(image, { y: 0 });
          };
    
          image.addEventListener("mouseenter", handleEnter);
          image.addEventListener("mouseleave", handleLeave);
    
      
          return () => {
            image.removeEventListener("mouseenter", handleEnter);
            image.removeEventListener("mouseleave", handleLeave);
          };
        });
    }, []);

    return (
        <>
        <div className='fresh-section'>
            <div className='fresh-container'>
                <div className='fresh-text'>
                    <h1>Fresh New Look</h1>
                </div>
                <div className='fresh-text-1'>
                    <h1>Elegance Infused with Efficiency</h1>
                </div>
                <div className='fresh-text-2'>
                    <p>Every pixel has been refined and polished with care, resulting <br /> in a harmonious balance between aesthetics and usability.</p> <br />
                </div>
            </div>
            <div className="fresh-container-image">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="fresh-image"
                />
                ))}
            </div>
        </div>
        </>
    )
}

export default Fresh;