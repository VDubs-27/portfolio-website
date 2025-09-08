export default function Segment1() {
    return (
        <div className="segment1">
            <div className="segment1-content">
                <h1 className="segment1-heading">Hi, I'm Vikram Varadarajan</h1>
                <h3 className="extra">and I'm <span style={{"animation": "change 2s infinite ease-in-out","fontSize": "2.5rem", "fontWeight": "bold", "color": "white"}}>passionate</span> about collaborating to build <span style={{"fontSize": "2.2rem", "color": "white", "fontWeight": "bold"}}>high-quality</span> software that people will <span style={{"fontSize": "2rem", "color": "white","fontWeight": "bold"}}>value</span></h3>
                <button className="projects-button" onClick={() => window.location.href="#projects"}>View Projects</button>
                <button className="contact-button" onClick={() => window.location.href="#contact"}>Contact Me</button>
                <button className="contact-button" onClick={() => window.open("https://drive.google.com/file/d/1lxd5_QUTBv7C9NAuPfiNbJFf_AhZYAp8/view?usp=drive_link", "_blank")}>View Resume</button>
                <div className="external-links">
                    <img src="/src/assets/github.png" alt="GitHub" onClick={() => window.open("https://github.com/VDubs-27", "_blank")} />
                    <img src="/src/assets/linkedin.png" alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/vikram-varadarajan-54aaa6283/", "_blank")} />
                    <img src="/src/assets/email.png" alt="Email" onClick={() => window.open("mailto:vikramaditya.varadarajan@gmail.com", "_blank")} />
                </div>
                <h3 className="subtitle">Software Engineering Student | University of Auckland</h3>
            </div>
            <img className="profile-img" src="/src/assets/landingimg.png" alt="Profile" style={{ opacity: 0.8 }} />
        </div>
        
    )
}