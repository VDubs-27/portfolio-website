import React from 'react';

export default function Introduction() {

    const [curtainsOpen, setCurtainsOpen] = React.useState(false);
    function openCurtains() {
        setCurtainsOpen(true);
        document.querySelector(".enter").style.animation = 'none';
        document.querySelector(".introduction").style.animation = 'shrink 1.25s ease-in-out';
        setTimeout(() => {
            document.querySelector(".introduction").style.display = 'none';
        }, 1250);
    }

    function handleImageClick() {
        const img = document.querySelector(".pfp img");
        const textElement = document.querySelector(".text");
        // Ternary operator based on the click
        img.classList.contains('flipped') ? img.classList.remove('flipped') : img.classList.add('flipped');

        img.classList.contains('flipped') ? textElement.textContent = "📍 Auckland, New Zealand" : textElement.textContent = "🎓 Software Engineering Student";

        setTimeout(() => {
            img.classList.contains('flipped') ? img.src = 'https://images.pexels.com/photos/29015656/pexels-photo-29015656/free-photo-of-sky-tower-and-auckland-harbor-view.jpeg' : img.src = 'https://avatars.githubusercontent.com/u/188545134?v=4';
        }, 200);
    }

    return (
        <>
            <div className={`curtain-left ${curtainsOpen ? 'open' : ''}`}></div>
            <div className={`curtain-right ${curtainsOpen ? 'open' : ''}`}></div>
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