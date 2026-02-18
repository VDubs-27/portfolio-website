export default function Background() {
    
    const stars = [];
    const starCount = Math.random() * (400 - 200) + 200;
    
    for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 1; // Random size between 1 and 3
        stars.push(
            <div
                className="star"
                key={i}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.8 + 0.2,
                    animationDuration: `${Math.random() * 3 + 1}s`,
                }}
            ></div>
        )
    }

    return (
        <div className="background fixed inset-0 w-full h-full overflow-hidden -z-10">
            {stars}
        </div>
    );
}