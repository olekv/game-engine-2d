import { useState, useEffect } from 'react';
import Skateboard from './Skateboard';

const leftStart = 100;
const ground = 700;
const rightWall = 1500;
const timeChangePerIterationMillisecond = 100;

const gravitationAccelerationPixelsPerSecond = -9.8 * 100;
const topVelocityAtTheStartPixelsPerSecond = 2.45 * 100;

const leftVelocityAtTheStartPixelsPerSecond = 5 * 100;

let timeMilliseconds = 0;

export default function SkateboardEngine() {
    const [left, setLeft] = useState(leftStart);
    const [top, setTop] = useState(ground);
    

    const next = () => {
        console.log("----------------");
        timeMilliseconds += timeChangePerIterationMillisecond;
        console.log("time: " + timeMilliseconds);
        setLeft(calculateLeft(timeMilliseconds, left));
        setTop(calculateTop(timeMilliseconds, top));
        console.log("----------------");
    }

    return <Skateboard top={top} left={left} next={() => next()}/>
}

function calculateLeft(timeMilliseconds, left) {
    // d = Vo * t + 1/2 * a * t²
    const leftDistancePixels = leftVelocityAtTheStartPixelsPerSecond * (timeMilliseconds / 1000) + 0.5 * 0 * Math.sqrt((timeMilliseconds / 1000))
    let nextLeft = leftStart + leftDistancePixels;

    if (nextLeft >= rightWall) nextLeft = left;

    console.log("left: " + nextLeft)

    return nextLeft;
}

function calculateTop(timeMilliseconds, top) {
    // Vf = Vo + a * t
    const topVelocityPixelsPerSecond = topVelocityAtTheStartPixelsPerSecond + gravitationAccelerationPixelsPerSecond * (timeMilliseconds / 1000);
    const topVelocityPixelsPerMillisecond = topVelocityPixelsPerSecond / 1000;
    console.log("top velocity second: " + topVelocityPixelsPerSecond)
    console.log("top velocity millisecond: " + topVelocityPixelsPerMillisecond)

    let nextTop = top - (topVelocityPixelsPerMillisecond * timeChangePerIterationMillisecond);

    if (nextTop >= ground) nextTop = ground;
    
    console.log("top: " + nextTop)

    return nextTop;
}