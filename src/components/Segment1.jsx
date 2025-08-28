export default function Segment1() {
    return (
        <div className="segment1">
            <div className="segment1-content">
                <h1 className="segment1-heading">Hi, I'm Vikram Varadarajan</h1>
                <h3 className="subtitle">Software Engineering Student at the University of Auckland</h3>
                <button className="projects-button"><a href="#projects">View Projects</a></button>
                <button className="contact-button"><a href="#contact">Contact Me</a></button>
                <div className="external-links">
                    <img src="/src/assets/github.png" alt="GitHub" onClick={() => window.open("https://github.com/VDubs-27", "_blank")} />
                    <img src="/src/assets/linkedin.png" alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/vikram-varadarajan-54aaa6283/", "_blank")} />
                    <img src="/src/assets/email.png" alt="Email" onClick={() => window.open("mailto:vikramaditya.varadarajan@gmail.com", "_blank")} />
                </div>
            </div>
            <img className="profile-img" src="/src/assets/landingimg.png" alt="Profile" style={{ opacity: 0.8 }} />
        </div>
        
    )
}