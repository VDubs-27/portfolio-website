import React from "react"
import Introduction from "./components/Introduction"
import Background from "./components/Background"
import Header from "./components/Header"
import Segment1 from "./components/Segment1"
import Footer from "./components/Footer"
import Scroll from "./components/Scroll"
import About from "./components/About"

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

  return (
    <>
      <Introduction curtainsOpen={curtainsOpen} openCurtains={openCurtains} />
      {curtainsOpen && (
        <div className="first-content" style={{animation: 'fadeIn 3s ease-in-out'}}>
          <Background />
          <Header />
          <div className="main-content-wrapper">
            <Segment1 />
            <Scroll />
            <About />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
