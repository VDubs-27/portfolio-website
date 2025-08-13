export default function Introduction() {

    function openCurtains() {
        const leftCurtain = document.querySelector('.curtain-left');
        const rightCurtain = document.querySelector('.curtain-right');
        leftCurtain.style.transform = 'translateX(-100%)';
        rightCurtain.style.transform = 'translateX(100%)';
    }

    return (
        <div className="introduction">
            <div className="pfp">
                <img src="https://avatars.githubusercontent.com/u/188545134?v=4" alt="Profile" />
            </div>
            <h1>Vikram Varadarajan</h1>
            <p>Software Engineering Student</p>
            <button className="enter" onClick={openCurtains}>Go</button>
            <div className="curtain-left"></div>
            <div className="curtain-right"></div>
        </div>
    )
}