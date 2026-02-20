import React from "react";

export default function About() {
    const [current, setCurrent] = React.useState(0);
    const imgRef = React.useRef(null);
    const summaryRef = React.useRef(null);

    const nextSlide = () => {
        setCurrent((prev) => {
            const next = (prev + 1) % slides.length;
            setTimeout(() => {
                if (imgRef.current) {
                    imgRef.current.style.animation = "none";
                    void imgRef.current.offsetWidth;
                    imgRef.current.style.transform = "rotate(var(--rotation))";
                    imgRef.current.style.animation = "flick 0.75s ease-in-out";
                }
                if (summaryRef.current) {
                    summaryRef.current.style.animation = "none";
                    void summaryRef.current.offsetWidth;
                    summaryRef.current.style.animation = "fadeIn 0.5s ease-in-out";
                }
            }, 0);
            return next;
        });
    };

    const prevSlide = () => {
        setCurrent((prev) => {
            const next = (prev - 1 + slides.length) % slides.length;
            setTimeout(() => {
                if (imgRef.current) {
                    imgRef.current.style.animation = "none";
                    void imgRef.current.offsetWidth;
                    imgRef.current.style.transform = "rotate(var(--rotation))";
                    imgRef.current.style.animation = "flick 0.75s ease-in-out";
                }
                if (summaryRef.current) {
                    summaryRef.current.style.animation = "none";
                    void summaryRef.current.offsetWidth;
                    summaryRef.current.style.animation = "fadeIn 0.5s ease-in-out";
                }
            }, 0);
            return next;
        });
    };

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
            summary: "As an executive on Google Developer's Student Club, I organize events promoting learning and collaboration among keen students in technology."
        },
        {
            src: "src/assets/cricket.jpg",
            alt: "Winning the Auckland Reserve Grade Cricket Championship",
            rotation: 4,
            summary: "Since I was 9 years old, I have played cricket for Takapuna District Cricket Club and I now play in the Auckland Reserve Grade."
        },
        {
            src: "src/assets/panel.jpg",
            alt: "Panelist at Westlake Boys High School's Scholar's Afternoon",
            rotation: -4,
            summary: "I was invited as a panelist to share my NZQA scholarship experience and advice with high-achieving students at Westlake Boys High School."
        },
        {
            src: "src/assets/ultimate.jpg",
            alt: "Volunteer coach for the Westlake Boys Frisbee Team",
            rotation: 0,
            summary: "I am a volunteer coach for the Westlake Ultimate Frisbee team, helping to train and mentor young athletes in the sport."
        }
    ];

    return (
        <div className="about">
            <div className="left-line">
                <div className="photo-stack">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            ref={index === current ? imgRef : null}
                            className={`about-slide${index === current ? " active" : ""}`}
                            src={slide.src}
                            alt={slide.alt}
                            style={{
                                transform: `rotate(${slide.rotation}deg) translateX(${(index - current) * 10}px)`,
                                "--rotation": `${slide.rotation}deg translateX(${(index - current) * 10}px)`
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
                <p ref={summaryRef}>{slides[current].summary}</p>
            </div>
        </div>
    );
}