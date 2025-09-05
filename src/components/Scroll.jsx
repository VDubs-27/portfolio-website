import React from "react";

export default function Scroll() {

    const handleScroll = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="scroll-container">
            <a href="#about" onClick={handleScroll}>
                <img className="scroll-down" src="/src/assets/down.png" alt="Scroll Down" />
            </a>
        </div>
    )
}