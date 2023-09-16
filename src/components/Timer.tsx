import { useState } from "react";

interface timerProps {
    minutes: number;
}

export default function timer(props: timerProps) {
    const [timer, setTimer] = useState<string>(`${props.minutes}:00`);
    const [secondsRem, setSecondsRem] = useState<number>(props.minutes * 60);
    const [intervalId, setIntervalId] = useState('');

    setInterval(() => {
        setSecondsRem(secondsRem - 1);
    }, 1000);



}

