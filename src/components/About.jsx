import React from "react";

export default function About() {
    const [current, setCurrent] = React.useState(0);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

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
            summary: "As an executive member on Google Developer's Student Club, I organize events to promote learning and collaboration among students interested in technology."
        },
        {
            src: "src/assets/cricket.jpg",
            alt: "Winning the Auckland Reserve Grade Cricket Championship",
            rotation: 4,
            summary: "Since I was 9 years old, I have played cricket for Takapuna District Cricket Club and I know play in the Auckland Reserve Grade."
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
    ];

    const textElement = document.querySelector(".summary");
    if (textElement) {
        textElement.style.animation = 'none';
        void textElement.offsetWidth;
        textElement.style.animation = 'fadeIn 0.5s ease-in-out';
    }

    return (
        <div id="about" className="about">
            <div className="left-line">
                <div className="photo-stack">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            className={`about-slide${index === current ? " active" : ""}`}
                            src={slide.src}
                            alt={slide.alt}
                            style={{
                                transform: `rotate(${slide.rotation}deg)`,
                                "--rotation": `${slide.rotation}deg`
                            }}
                        />
                    ))}
                    <img src="src/assets/left.png" alt="Left Arrow" className="left-arrow"
                        onClick={prevSlide}
                    />
                    <img src="src/assets/right.png" alt="Right Arrow" className="right-arrow"
                        onClick={nextSlide}
                    />
                </div>
                <p className="summary">{slides[current].summary}</p>
            </div>
            <div className="me-text">
                <h2>Who am I?</h2>
                <p>I am a passionate individual with a love for technology and innovation. I enjoy working on projects that challenge me and allow me to grow as a developer.</p>
            </div>
        </div>
    );
}