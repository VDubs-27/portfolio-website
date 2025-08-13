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

    return (
        <>
            <div className={`curtain-left ${curtainsOpen ? 'open' : ''}`}></div>
            <div className={`curtain-right ${curtainsOpen ? 'open' : ''}`}></div>
            <div className="introduction">
                <div className="pfp">
                    <img src="https://avatars.githubusercontent.com/u/188545134?v=4" alt="Profile" />
                </div>
                <h1 className="name">Vikram Varadarajan</h1>
                <p>Software Engineering Student</p>
                <button className="enter" onClick={openCurtains}>Go</button>
            </div>
        </>
    )
}