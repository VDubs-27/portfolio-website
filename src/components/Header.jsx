export default function Header() {
    return (
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png" alt="Logo" />
            <nav className="nav">
                <ul>
                    <li><a href="#home">About Me</a></li>
                    <li><a href="#about">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}