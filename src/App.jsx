import React from "react"
import Introduction from "./components/Introduction"
import Background from "./components/Background"
import Header from "./components/Header"
import Segment1 from "./components/Segment1"
import Footer from "./components/Footer"
import Scroll from "./components/Scroll"
import About from "./components/About"
import Network from "./components/Network"
import Projects from "./components/Projects"
import { useScrollReveal } from "./hooks/useScrollReveal"
import './index.css'

function App() {
  const [curtainsOpen, setCurtainsOpen] = React.useState(false);
  
  function openCurtains() {
    setCurtainsOpen(true);
    document.querySelector(".enter").style.animation = 'none';
    document.querySelector(".introduction").style.animation = 'shrink 1.25s ease-in-out';
    setTimeout(() => {
      document.querySelector(".introduction").style.display = 'none';
    }, 1000);
    setTimeout(() => {
      document.querySelector(".curtain-left").style.display = 'none';
      document.querySelector(".curtain-right").style.display = 'none';
    }, 3000);
  }

  const [segment1Ref, segment1Visible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [projectsRef, projectsVisible] = useScrollReveal();
  const [networkRef, networkVisible] = useScrollReveal();

  return (
    <>
      <Introduction curtainsOpen={curtainsOpen} openCurtains={openCurtains} />
      {curtainsOpen && (
        <div className="first-content" style={{animation: 'fadeIn 3s ease-in-out'}}>
          <Background />
          <Header />
          <div className="main-content-wrapper">
            <main className="scroll-smooth">
              <section 
                id="segment1" 
                ref={segment1Ref}
                className={`min-h-screen w-full flex flex-col justify-center transition-all duration-700 scroll-mt-16 md:scroll-mt-20 ${
                  segment1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Segment1 />
                <Scroll />
              </section>

              <section 
                id="about" 
                ref={aboutRef}
                className={`min-h-screen w-full flex flex-col justify-center transition-all duration-700 scroll-mt-16 md:scroll-mt-20 ${
                  aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <About />
              </section>

              <section 
                id="projects" 
                ref={projectsRef}
                className={`min-h-screen w-full flex flex-col justify-center transition-all duration-700 scroll-mt-16 md:scroll-mt-20 ${
                  projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Projects />
              </section>

              <section 
                id="network" 
                ref={networkRef}
                className={`min-h-screen w-full flex flex-col justify-center transition-all duration-700 scroll-mt-16 md:scroll-mt-20 ${
                  networkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Network />
              </section>
            </main>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App