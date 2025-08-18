import React from "react"
import Introduction from "./components/Introduction"
import Header from "./components/Header"
import Segment1 from "./components/Segment1"

function App() {

  const [curtainsOpen, setCurtainsOpen] = React.useState(false);
    function openCurtains() {
        setCurtainsOpen(true);
        document.querySelector(".enter").style.animation = 'none';
        document.querySelector(".introduction").style.animation = 'shrink 1.25s ease-in-out';
        setTimeout(() => {
            document.querySelector(".introduction").style.display = 'none';
        }, 1250);
    }

  return (
    <>
      <Introduction curtainsOpen={curtainsOpen} openCurtains={openCurtains} />
      {curtainsOpen && (
        <div className="first-content" style={{animation: 'fadeIn 3s ease-in-out'}}>
          <Header />
          <Segment1 />
        </div>
      )}
    </>
  )
}

export default App
