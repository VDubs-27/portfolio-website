export default function Segment1() {
    return (
        <div className="segment1">
            <div className="segment1-content">
                <h1 className="segment1-heading">Hi, I'm Vikram Varadarajan</h1>
                <h3 className="subtitle">Software Engineering Student at the University of Auckland</h3>
                <button className="projects-button"><a href="#projects">View Projects</a></button>
                <button className="contact-button"><a href="#contact">Contact Me</a></button>
            </div>
            <img className="profile-img" src="/src/assets/landingimg.png" alt="Profile" style={{ opacity: 0.8 }} />
        </div>
        
    )
}