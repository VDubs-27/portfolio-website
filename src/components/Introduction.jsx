import React from 'react';

export default function Introduction() {

    const [curtainsOpen, setCurtainsOpen] = React.useState(false);

    function openCurtains() {
        setCurtainsOpen(true);
        const hiddenDiv = document.querySelector(".hiddenDiv");
        document.querySelector(".enter").style.animation = 'none';
        if (hiddenDiv) {
            hiddenDiv.style.animation = 'fadeOut 2s ease-in-out';
        }
        setTimeout(() => {
            hiddenDiv.style.display = 'none';
        }, 2000);
        setTimeout(() => {
            document.querySelector(".name").style.color = '#222';
        }, 1000);
    }

    return (
        <>
            <div className={`curtain-left ${curtainsOpen ? 'open' : ''}`}></div>
            <div className={`curtain-right ${curtainsOpen ? 'open' : ''}`}></div>
            <div className="introduction">
                <div className="pfp">
                    <img src="https://avatars.githubusercontent.com/u/188545134?v=4" alt="Profile" />
                </div>
                <h1 className="name">Vikram Varadarajan</h1>
                <div className="hiddenDiv">
                    <p>Software Engineering Student</p>
                    <button className="enter" onClick={openCurtains}>Go</button>
                </div>
            </div>
        </>
    )
}