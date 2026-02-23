import React from "react";
import { scrollDown } from "../assets";

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
            <div className="scroll-wrapper" onClick={handleScroll}>
                <img src={scrollDown} alt="Scroll Down" className="scroll-down" />
            </div>
        </div>
    )
}