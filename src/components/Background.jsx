import { useMemo } from 'react';

export default function Background() {
    const stars = useMemo(() => {
        const starArray = [];
        const starCount = Math.random() * (400 - 200) + 200;
        
        for (let i = 0; i < starCount; i++) {
            const size = Math.random() * 2 + 1;
            starArray.push(
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
            );
        }
        return starArray;
    }, []); // Empty dependency array means this only runs once

    return (
        <div className="background fixed inset-0 w-full h-full overflow-hidden -z-10">
            {stars}
        </div>
    );
}