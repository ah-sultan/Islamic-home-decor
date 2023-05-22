import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;

function CountDown() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{days}d : {hours}h : {minutes}m : {seconds}s </span>;
        }
    };


    // coundown Section

    const targetDate = new Date('2023-06-01');


    return (
        <>
            <div className="flex items-center gap-x-3 ">
                <p>Ends after:</p>
                <div className="bg-primary py-1 px-2 text-white">
                    <Countdown
                        date={targetDate}
                        renderer={renderer}
                        daysInHours={true}
                    />
                </div>
            </div>
        </>
    )
}

export default CountDown
