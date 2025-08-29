export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-separator">
                <img className="footer-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png" alt="Logo" />
                <p>&copy; 2024 Vikram Varadarajan. Icons by <a href="https://www.icons8.com">Icons8</a></p>
            </div>
            <a className="resume-link" href="https://drive.google.com/file/d/1lxd5_QUTBv7C9NAuPfiNbJFf_AhZYAp8/view" target="_blank">
                <img src="src/assets/resume.png" alt="Resume" style={{ width: '40px', height: '40px' }} />
                View Resume
            </a>
        </footer>
    )
}