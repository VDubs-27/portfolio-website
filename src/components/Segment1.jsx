export default function Segment1() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="flex flex-col md:flex-row justify-center pt-20 px-4 md:px-8 lg:px-16 text-white gap-8">
            <div className="text-center lg:text-left flex-1">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin mb-4">
                    Kia Ora, I'm <span className="inline-block">Vikram Varadarajan</span>
                </p>
                
                <h3 className="text-lg sm:text-xl md:text-2xl sm:max-w-xl md:max-w-2xl mx-auto lg:mx-0 mb-8 font-light text-gray-300">
                    and I'm <div className="inline-block relative align-middle h-10 overflow-hidden">
                    <span className="word-list">
                        <span style={{"animation": "change 2s infinite ease-in-out, text-change 10s infinite ease-in-out", "fontSize": "2.5rem", "fontWeight": "bold", "color": "white", "marginTop" : "-5px"}}>trustworthy</span>
                        <span style={{"animation": "change 2s infinite ease-in-out, text-change 10s infinite ease-in-out", "fontSize": "2.6rem", "fontWeight": "bold", "color": "white", "marginTop" : "-3px"}}>meticulous</span>
                        <span style={{"animation": "change 2s infinite ease-in-out, text-change 10s infinite ease-in-out", "fontSize": "2.7rem", "fontWeight": "bold", "color": "white", "marginTop" : "3px"}}>committed</span>
                    </span></div> in building {' '}
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        high-quality
                    </span> software that people will{' '}
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        value
                    </span>
                </h3>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                    <button 
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                        onClick={(e) => handleScroll(e, "projects")}
                    >
                        View Projects
                    </button>
                    <button 
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                        onClick={() => window.open("https://drive.google.com/file/d/1lxd5_QUTBv7C9NAuPfiNbJFf_AhZYAp8/view?usp=drive_link", "_blank")}
                    >
                        View Resume
                    </button>
                </div>

                <div className="flex gap-5 justify-center lg:justify-start mb-4">
                    <img 
                        src="/src/assets/github.png" 
                        alt="GitHub" 
                        className="w-8 h-8 sm:w-10 sm:h-10 opacity-75 hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1"
                        onClick={() => window.open("https://github.com/VDubs-27", "_blank")} 
                    />
                    <img 
                        src="/src/assets/linkedin.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8 sm:w-10 sm:h-10 opacity-75 hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1"
                        onClick={() => window.open("https://www.linkedin.com/in/vikram-varadarajan-54aaa6283/", "_blank")} 
                    />
                    <img 
                        src="/src/assets/email.png" 
                        alt="Email" 
                        className="w-8 h-8 sm:w-10 sm:h-10 opacity-75 hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1"
                        onClick={() => window.open("mailto:vikramaditya.varadarajan@gmail.com", "_blank")} 
                    />
                </div>

                <h3 className="text-sm sm:text-base text-gray-400 font-light">
                    Software Engineering Student | University of Auckland
                </h3>
            </div>

            {/* Profile Image */}
            <div className="hidden lg:block w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0">
                <img 
                    src="/src/assets/landingimg.png" 
                    alt="Profile" 
                    className="w-full h-auto opacity-80"
                />
            </div>
        </div>
    )
}