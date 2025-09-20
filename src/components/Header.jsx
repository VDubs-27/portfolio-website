export default function Header() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header className="header">
            <img src="src/assets/logo.png" alt="Logo" />
            <nav className="nav">
                <ul>
                    <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About Me</a></li>
                    <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
                    <li><a href="#network" onClick={(e) => handleScroll(e, "network")}>Network</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}