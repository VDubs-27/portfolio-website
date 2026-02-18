export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-separator">
                <div className="flex flex-col items-center gap-2">
                    <p>&copy; 2026 Vikram Varadarajan. Icons by <a href="https://www.icons8.com">Icons8</a></p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Made with</span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5" />
                    <span>+</span>
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-5 h-5" />
                </div>
            </div>
            <a className="resume-link" href="https://drive.google.com/file/d/1lxd5_QUTBv7C9NAuPfiNbJFf_AhZYAp8/view" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/resume.png" alt="Resume" style={{ width: '40px', height: '40px' }} />
                View Resume
            </a>
        </footer>
    )
}