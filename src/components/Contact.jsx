export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-modal">
                <h1 className="contact-title">Get in touch!</h1>
                <p className="contact-subtitle">I'd love to hear from you!</p>
                <div className="contact">
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" className="contact-input" required />
                        <input type="email" placeholder="Your Email" className="contact-input" required />
                        <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
                        <button type="submit" className="contact-me-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}