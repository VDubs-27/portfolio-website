import React from 'react';

export default function Introduction({ curtainsOpen, openCurtains }) {

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

    return (
        <>
            <div className={`curtain-left bg-[url('https://freerangestock.com/sample/94728/night-sky-with-plane-flying-in-the-distance.jpg')] lg:bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/29/N-TN-C192_Brihadeeswarar_Temple_at_Sunset.jpg')] ${curtainsOpen ? 'open' : ''}`}></div>
            <div className={`curtain-right bg-[url('https://freerangestock.com/sample/94728/night-sky-with-plane-flying-in-the-distance.jpg')] lg:bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/29/N-TN-C192_Brihadeeswarar_Temple_at_Sunset.jpg')] ${curtainsOpen ? 'open' : ''}`}></div>
            <div className="introduction">
                <div className="pfp">
                    <img src="https://avatars.githubusercontent.com/u/188545134?v=4" alt="Profile" onClick={handleImageClick}/>
                </div>
                <h1 className="name">Vikram Varadarajan</h1>
                <p className="text">🎓 Software Engineering Student</p>
                <button className="enter" onClick={openCurtains}>Go</button>
            </div>
        </>
    )
}