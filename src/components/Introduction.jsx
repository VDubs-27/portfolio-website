import { useState, useEffect } from 'react';

export default function Introduction({ curtainsOpen, openCurtains }) {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/29/N-TN-C192_Brihadeeswarar_Temple_at_Sunset.jpg';
        
        img.onload = () => {
            setImagesLoaded(true);
        };
    }, []);

    function handleImageClick() {
        const img = document.querySelector(".pfp img");
        const textElement = document.querySelector(".text");
        // Ternary operator based on the click
        img.classList.contains('flipped') ? img.classList.remove('flipped') : img.classList.add('flipped');

        img.classList.contains('flipped') ? textElement.textContent = "📍 Auckland, New Zealand" : textElement.textContent = "🎓 Software Engineering Student";

        textElement.style.animation = 'none';
        void textElement.offsetWidth;
        textElement.style.animation = 'fadeIn 0.5s ease-in-out';

        setTimeout(() => {
            img.classList.contains('flipped') ? img.src = 'https://images.pexels.com/photos/29015656/pexels-photo-29015656/free-photo-of-sky-tower-and-auckland-harbor-view.jpeg' : img.src = 'https://avatars.githubusercontent.com/u/188545134?v=4';
        }, 200);
    }

    if (!imagesLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000010] via-[#202061] to-[#000010]">
                <div className="text-center">
                    <div className="animate-spin">
                        <img src="/src/assets/logo.png" alt="Loading" className="w-40 h-40" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={`curtain-left bg-[url('https://freerangestock.com/sample/94728/night-sky-with-plane-flying-in-the-distance.jpg')] lg:bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/29/N-TN-C192_Brihadeeswarar_Temple_at_Sunset.jpg')] ${curtainsOpen ? 'open' : ''}`}></div>
            <div className={`curtain-right bg-[url('https://freerangestock.com/sample/94728/night-sky-with-plane-flying-in-the-distance.jpg')] lg:bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/29/N-TN-C192_Brihadeeswarar_Temple_at_Sunset.jpg')] ${curtainsOpen ? 'open' : ''}`}></div>
            <div className="introduction">
                <div className="pfp">
                    <img src="https://avatars.githubusercontent.com/u/188545134?v=4" alt="Profile" onClick={handleImageClick}/>
                </div>
                <h1 className="name text-4xl text-white m-0">Vikram Varadarajan</h1>
                <p className="text text-lg text-white mt-2">🎓 Software Engineering Student</p>
                <button className="enter" onClick={openCurtains}>Go</button>
            </div>
        </>
    )
}