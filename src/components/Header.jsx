import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    }

    return (
        <header className="header flex text-center items-center justify-between z-[100] p-2 sticky top-0 bg-[rgba(0,0,16,0.95)] backdrop-blur-md">
            <img src="src/assets/logo.png" className="w-[75px]" alt="Logo" />
            
            {/* Hamburger button - only visible on mobile */}
            <button
                className="md:hidden flex flex-col bg-transparent border-0 cursor-pointer gap-[5px] p-2 z-[101]"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span className={`w-[25px] h-[2.5px] bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
                <span className={`w-[25px] h-[2.5px] bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-[25px] h-[2.5px] bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
            </button>

            {/* Navigation - hidden on mobile unless menuOpen is true */}
            <nav className={`nav absolute md:relative top-[60px] md:top-0 left-0 md:left-auto right-0 md:right-auto bg-[rgba(0,0,16,1)] md:bg-transparent overflow-hidden transition-all duration-300 z-[100] ${menuOpen ? 'max-h-[300px]' : 'max-h-0'} md:max-h-none`}>
                <ul className="flex flex-col md:flex-row gap-0 md:gap-[10px] list-none">
                    <li className="border-b md:border-b-0 border-[rgba(255,255,255,0.05)]">
                        <a href="#about" onClick={(e) => handleScroll(e, "about")} className="block md:inline-block text-white no-underline md:hover:bg-transparent transition-colors">About Me</a>
                    </li>
                    <li className="border-b md:border-b-0 border-[rgba(255,255,255,0.05)]">
                        <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="block md:inline-block text-white no-underline md:hover:bg-transparent transition-colors">Projects</a>
                    </li>
                    <li className="border-b-0">
                        <a href="#network" onClick={(e) => handleScroll(e, "network")} className="block md:inline-block text-white no-underline md:hover:bg-transparent transition-colors">Network</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}