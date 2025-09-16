import React from "react";

export default function About() {
    const [current, setCurrent] = React.useState(0);
    const [expIndex, setExpIndex] = React.useState(0);
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

    function handleExpClick(index) {
        setExpIndex(index);
    }

    React.useEffect(() => {
        const expNav = document.querySelectorAll(".exp-nav p");
        expNav.forEach((nav, index) => {
            nav.classList.remove("active");
            if (index === expIndex) {
                nav.classList.add("active");
            }
            nav.onclick = () => handleExpClick(index);
        });
    }, [expIndex]);

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
            summary: "Since I was 9 years old, I have played cricket for Takapuna District Cricket Club and I know play in the Auckland Reserve Grade."
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

    const experience = [
        {
            role: "Full Stack Developer",
            company: "Web Development and Consulting Club",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddg0XhYyGXoYz37Gvm-8Iy9FURBzgsI3Mxw&s",
            link: "https://wdcc.co.nz/",
            duration: "March 2025 - Present",
            summary: "Worked in a group of 10 to develop a website for the university volunteer club using the FERN stack (Firebase, Express.js, React.js, Node.js)."
        },
        {
            role: "Sponsorship Coordinator",
            company: "Google Developer's Student Club",
            logo: "https://exeter-guild.ams3.digitaloceanspaces.com/media/pVi6acUPBQY7ItjptopvY2yWp4LtwBxxkEmXYHP7.png",
            link: "https://developers.google.com/community",
            duration: "April 2025 - Present",
            summary: "Secured sponsorships and partnerships with local businesses and tech companies to support club events and initiatives."
        },
        {
            role: "External Team Member",
            company: "Volunteer's Club",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWG2HssgiPb2ylKiWEI-Uawkv2zp0JWEjKxQ&s",
            link: "https://www.instagram.com/uoavolunteersclub/?hl=en",
            duration: "December 2024 - Present",
            summary: "Collaborated with Auckland charities to organize community service events and initiatives, contributing to planning and execution."
        },
        {
            role: "Programme Member",
            company: "University of Auckland Case Club",
            logo: "https://images.squarespace-cdn.com/content/v1/5e118843e7986c43dc7d436e/1676524892822-S43ZJ4AV5HNW2M6Y6BBS/UACC+FINAL+LOGO+2022+-+CIRCLE.png",
            link: "https://uoacaseclub.co.nz/",
            duration: "March 2025 - Present",
            summary: "Participated in case competitions, developing problem-solving and presentation skills by working on real-world business challenges."
        },
        {
            role: "Coach | Umpire | Mentor",
            company: "Takapuna District Cricket Club",
            logo: "https://prodcdn.sporty.co.nz/cms/13573/logo.png?ts=21813115927",
            link: "https://www.sporty.co.nz/takapunacricket/",
            duration: "October 2017 - Present",
            summary: "Coach and mentor junior cricket teams, fostering skill development and sportsmanship. Umpire matches, ensuring fair play and adherence to rules."
        },
        {
            role: "Dual Brand Strategy Intern",
            company: "Universitas 21",
            logo: "https://images.seeklogo.com/logo-png/52/1/universitas-21-logo-png_seeklogo-524769.png",
            link: "https://universitas21.com/",
            duration: "November 2024 - December 2024",
            summary: "Collaborated with students from different countries to develop a dual brand strategy for a neurodiversity brand, presenting our strategy to the company CEO."
        },
        {
            role: "Facilitator | Coach",
            company: "Hungerball",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnpkqfPFKxq7r8OCQ3wTdLdKsb1j2YzxmDw&s",
            link: "https://hungerball.com/",
            duration: "November 2024 - Present",
            summary: "Traveled across Auckland hosting inclusive inflatable sports events for diverse groups, creating low stakes physical activity opportunities boosting exercise levels in local communities."
        }
    ]

    return (
        <div id="about" className="about">
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
                <p ref={summaryRef} className="summary">{slides[current].summary}</p>
            </div>
            <div className="experience">
                <h2>Relevant Experience</h2>
                <div className="exp-modal">
                    <div className="exp-nav">
                        <p className="active">Extracurriculars</p>
                        <p>Employment</p>
                    </div>
                    <div className="exp-cards">
                        {(expIndex === 0) && experience.map((exp, index) => (
                            index < 4 && (
                            <div key={index} className="exp-card">
                                <a href={exp.link} target="_blank" rel="noopener noreferrer"><img src={exp.logo} alt={`${exp.company} Logo`} className="exp-logo" /></a>
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                                <p className="exp-duration">{exp.duration}</p>
                                <p className="exp-summary">{exp.summary}</p>
                            </div>)
                        ))}
                        {(expIndex === 1) && experience.map((exp, index) => (
                            index > 3 && (
                            <div key={index} className="exp-card">
                                <img src={exp.logo} alt={`${exp.company} Logo`} className="exp-logo" />
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                                <p className="exp-duration">{exp.duration}</p>
                                <p className="exp-summary">{exp.summary}</p>
                            </div>)
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}