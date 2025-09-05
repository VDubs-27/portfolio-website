import React from "react";

export default function About() {

    const slides = [
        {
            src: "src/assets/case.jpeg",
            alt: "Presenting for the University's Case Club",
            rotation: 2,
            summary: "I am a member of the University of Auckland's Case Club where I participate in case competitions involving companies like ZURU."
        },
        {
            src: "src/assets/hackathon.jpeg",
            alt: "Executive Member of Google Developer's Student Club, University of Auckland",
            rotation: -2,
            summary: "As an executive member of the Google Developer's Student Club at the University of Auckland, I help organize events and workshops to promote learning and collaboration among students interested in technology."
        },
        {
            src: "src/assets/cricket.jpg",
            alt: "Winning the Auckland Reserve Grade Cricket Championship",
            rotation: 4,
            summary: "I play cricket for Takapuna District Cricket Club in the Auckland Reserve Grade."
        },
        {
            src: "src/assets/panel.jpg",
            alt: "Panelist at Westlake Boys High School's Scholar's Afternoon",
            rotation: -4,
            summary: "I was invited as a panelist to share my NZQA scholarship experience and advice with high-achieving students at Westlake Boys High School."
        },
        {
            src: "https://live.staticflickr.com/65535/53992791812_8a90cb23b5_b.jpg",
            alt: "Volunteer coach for the Westlake Boys Frisbee Team",
            rotation: 0,
            summary: "I am a volunteer coach for the Westlake Ultimate Frisbee team, helping to train and mentor young athletes in the sport."
        }
    ]

    return (
        <div id="about" className="about">
            <div className="photo-stack">
                {slides.map((slide, idx) => (
                    <img
                        key={idx}
                        className="about-slide"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ transform: `rotate(${slide.rotation}deg)` }}
                    />
                ))}
                <p>{slides[0].summary}</p>
            </div>
            <p>This is the about section where I can introduce myself.</p>
        </div>
    )
}