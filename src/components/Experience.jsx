import React from "react";

export default function Experience() {
    const [expIndex, setExpIndex] = React.useState(0);

    function handleExpClick(index) {
        setExpIndex(index);
    }

    const experience = [
        {
            role: "Software Development Intern",
            company: "Figured",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE_Kpwvval7KA/company-logo_200_200/B4EZxEPERXJYAM-/0/1770671326811/figuredapp_logo?e=2147483647&v=beta&t=mZbykdloLmefzukU4oYCBm4FwRyqK-_TpDRGFW7wgC4",
            link: "https://www.figured.com/",
            duration: "November 2025 - Present",
            summary: "Making regular changes in a development team to Figured's financial management software offered to farmers. The tech stack includes Vue, PHP, MySQL, MongoDB. Currently working part-time with tertiary study."
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
            role: "Tutor",
            company: "Cell Tuition",
            logo: "https://media.licdn.com/dms/image/v2/D560BAQGK3bTH08hPjQ/company-logo_200_200/company-logo_200_200/0/1709601587266?e=2147483647&v=beta&t=6OrI5IQh_9o61kXenbZ4DENa4v3ZRtnU0ZHGDCDTKw4",
            link: "https://www.celltuition.com/",
            duration: "March 2024 - Present",
            summary: "Provide one-on-one tutoring in Mathematics and Statistics to high school students in NCEA and Cambridge, tailoring lessons to individual learning styles and needs."
        },
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
            logo: "https://gdgc.dbit.in/nav-logo.png",
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
    ];

    return (
        <div className="experience">
            <div className="exp-modal">
                {/* Navigation tabs */}
                <div className="exp-nav">
                    <div 
                        className="exp-slider"
                        style={{
                            transform: `translateX(${expIndex * 100}%)`
                        }} 
                    />
                    <p 
                        className={expIndex === 0 ? "active" : ""}
                        onClick={() => handleExpClick(0)}
                    >
                        Employment
                    </p>
                    <p 
                        className={expIndex === 1 ? "active" : ""}
                        onClick={() => handleExpClick(1)}
                    >
                        Extracurriculars
                    </p>
                </div>

                {/* Experience cards */}
                <div className="exp-cards">
                    {(expIndex === 0) && experience.map((exp, index) => (
                        index < 4 && (
                            <div 
                                key={index} 
                                className="exp-card"
                                style={{
                                    animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`, 
                                    opacity: 0
                                }}
                            >
                                <div className="exp-header">
                                    <a 
                                        href={exp.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img 
                                            src={exp.logo} 
                                            alt={`${exp.company} Logo`} 
                                            className="exp-logo" 
                                        />
                                    </a>
                                    <div className="exp-spacer">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <h4 className="exp-company">{exp.company}</h4>
                                    </div>
                                </div>
                                <p className="exp-summary">{exp.summary}</p>
                                <p className="exp-duration">{exp.duration}</p>
                            </div>
                        )
                    ))}
                    {(expIndex === 1) && experience.map((exp, index) => (
                        index > 3 && (
                            <div 
                                key={index} 
                                className="exp-card"
                                style={{
                                    animation: `fadeIn 0.5s ease-in-out ${(index - 4) * 0.1}s forwards`, 
                                    opacity: 0
                                }}
                            >
                                <div className="exp-header">
                                    <a 
                                        href={exp.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img 
                                            src={exp.logo} 
                                            alt={`${exp.company} Logo`} 
                                            className="exp-logo" 
                                        />
                                    </a>
                                    <div className="exp-spacer">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <h4 className="exp-company">{exp.company}</h4>
                                    </div>
                                </div>
                                <p className="exp-summary">{exp.summary}</p>
                                <p className="exp-duration">{exp.duration}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}