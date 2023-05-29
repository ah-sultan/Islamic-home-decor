import React, { useState, useEffect } from 'react';

const CountDown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft(null);
            }
        };

        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [targetDate]);

    if (!timeLeft) {
        return <div>Countdown has ended!</div>;
    }

    return (
        <div className='flex text-center bg-primary p-1 px-2 text-white'>
            <div>{timeLeft.days}d :&nbsp;</div>
            <div>{timeLeft.hours}h : &nbsp;</div>
            <div>{timeLeft.minutes}m : &nbsp;</div>
            <div>{timeLeft.seconds}s</div>
        </div>
    );
};

export default CountDown;
