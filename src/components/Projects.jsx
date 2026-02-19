import React from "react";

export default function Projects() {
    const [techIndex, setTechIndex] = React.useState(0);

    function handleTechClick(index) {
        setTechIndex(index);
    }

    const projects = [
        {
            name: "anyWeather",
            description: "A weather web application that provides real-time weather data for anywhere in the world including precipitation, temperature, and wind speed.",
            link: "https://main--anyweatheranytime.netlify.app/",
            repo: "https://github.com/VDubs-27/WeatherApp.git",
            stack: ["HTML", "JavaScript", "CSS", "OpenWeatherMap API", "Google Places API"],
            icon: "src/assets/anyweather.png"

        },
        {
            name: "Flip&Find",
            description: "A memory card game where players flip cards to find matching pairs.",
            link: "https://main--flipandfind.netlify.app/",
            repo: "https://github.com/VDubs-27/FlipAndFind.git",
            stack: ["HTML", "JavaScript", "CSS"],
            icon: "src/assets/f&f.png"
        },
        {
            name: "freeQR",
            description: "A QR code generator that allows users to create and download custom QR codes for URLs.",
            link: "https://freeqrforever.netlify.app/",
            repo: "https://github.com/VDubs-27/freeQR.git",
            stack: ["HTML", "JavaScript", "CSS"],
            icon: "src/assets/qr.png"
        },
        {
            name: "Trivv",
            description: "A trivia quiz application that tests users' knowledge across various categories and difficulty levels.",
            link: "https://trivv.netlify.app/",
            repo: "https://github.com/VDubs-27/Trivv.git",
            stack: ["HTML", "JavaScript", "CSS", "Open Trivia DB API"],
            icon: "src/assets/trivv.png"
        },
        {
            name: "Indicium",
            description: "A finance blog website for young people in New Zealand to learn about personal finance and investing.",
            link: "https://investment-blog-one.vercel.app/",
            repo: "https://github.com/VDubs-27/investment-blog.git",
            stack: ["React", "CSS"],
            icon: "src/assets/indicium.png"
        },
        {
            name: "UoA Volunteer's Club Website",
            description: "I worked in a group to create a website for the University of Auckland Volunteer's Club to showcase their events and allow users to sign up.",
            link: "",
            repo: "https://github.com/UoaWDCC/volunteers",
            stack: ["React", "Tailwind CSS", "TypeScript", "Express.js", "Firebase", "Node.js"],
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWG2HssgiPb2ylKiWEI-Uawkv2zp0JWEjKxQ&s"
        }
    ]

    const certifications = [
        {
            name: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            link: "https://www.freecodecamp.org/certification/fccffa3fde9-5ece-4997-a3b2-913d78631e55/javascript-algorithms-and-data-structures-v8",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fcc_primary_small.svg/640px-Fcc_primary_small.svg.png",
            status: "Completed November 2024"
        },
        {
            name: "Responsive Web Design",
            issuer: "freeCodeCamp",
            link: "https://www.freecodecamp.org/certification/fccffa3fde9-5ece-4997-a3b2-913d78631e55/responsive-web-design",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fcc_primary_small.svg/640px-Fcc_primary_small.svg.png",
            status: "Completed November 2024"
        },
        {
            name: "Learn React",
            issuer: "Scrimba",
            link: "https://scrimba.com/certificate/glearnreact",
            icon: "https://pbs.twimg.com/profile_images/1790400990161567744/KY1XZp9o_400x400.jpg",
            status: "Begun July 2025"
        },
        {
            name: "Learn Vue",
            issuer: "Scrimba",
            link: "https://scrimba.com/certificate/glearnvue",
            icon: "https://pbs.twimg.com/profile_images/1790400990161567744/KY1XZp9o_400x400.jpg",
            status: "Completed December 2025"
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="technical-modal">
                <div className="technical-nav">
                    <div className="technical-slider" style={{
                        transform: `translateX(${techIndex * 100}%)`
                        }} />
                        <p className={techIndex === 0 ? "active" : ""}
                        onClick={() => handleTechClick(0)}>Projects</p>
                        <p className={techIndex === 1 ? "active" : ""}
                        onClick={() => handleTechClick(1)}>Certifications</p>
                </div>
                <div className="technical-cards">
                    {techIndex === 0 && projects.map((project, index) => (
                        <div className="technical-card" key={index} style={{animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`, opacity: 0}}>
                            <img className="project-icon" src={project.icon} alt={`${project.name} icon`} style={{filter: index === 2 || index === 4 ? 'invert(1)' : 'none'}} />
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-tech-stack"><strong>Tech Stack:</strong> {project.stack.join(", ")}</p>
                            <div className="project-links">
                                {project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/external.png" alt="Live Demo" style={{ width: '20px', height: '20px' }} />Live Demo
                                </a>}
                                <a className="project-link" href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/github.png" alt="Source Code" style={{ width: '20px', height: '20px' }} />Source Code
                                </a>
                            </div>
                        </div>
                    ))}
                    {techIndex === 1 && certifications.map((cert, index) => (
                        <div className="technical-card" key={index} style={{animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`, opacity: 0}}>
                            <img className="cert-icon" src={cert.icon} alt={`${cert.name} icon`} />
                            <h3 className="cert-name">{cert.name}</h3>
                            <p className="cert-issuer"><strong>Issuer:</strong> {cert.issuer}</p>
                            <p className="cert-status">{cert.status}</p>
                            <a className="cert-link" href={cert.link} target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/resume.png" alt="Certificate" style={{ width: '40px', height: '40px' }} />View Certificate
                            </a>
                        </div>
                    ))}
                </div>
                <div className="exp-modal-shadow">
                </div>
            </div>
        </section>
    )
}