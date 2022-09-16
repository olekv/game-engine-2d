import { useState } from 'react';

const rightWall = 1500;
const ground = 1300;

function Ball() {
    const [left, setLeft] = useState(100);
    const [leftAcceleration, setLeftAcceleration] = useState(50);
    const [topAcceleration, setTopAcceleration] = useState(50);
    const [top, setTop] = useState(0);
    const ballStyle = {
        position: "relative",
        width: 100,
        top: top,
        left: left
    };

    window.setTimeout(() => {
        setLeft(() => {
        if (left + leftAcceleration >= rightWall || left + leftAcceleration <= 0) {
            console.log("yes")
            setLeftAcceleration(-(leftAcceleration * 0.8));
        }
        return left + leftAcceleration;
        });
        setTop(() => {
        if (top + topAcceleration >= ground) {
            setTopAcceleration(-(topAcceleration * 0.8))
        }

        return top + topAcceleration;
        });
    }, 100);

    return (
        <div>
        <img src={'./football_PNG52722.png'} alt="logo" style={ballStyle}/>
        </div>
    );
}

export default Ball;