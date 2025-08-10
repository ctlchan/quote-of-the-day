import { SetStateAction, useEffect, useState } from "react"

type TimerProps = {
    setIsNewDay: React.Dispatch<SetStateAction<boolean>>
}

type TimeRemaining = {
    hours: number,
    minutes: number,
    seconds: number
}

export default function Timer({ setIsNewDay }: TimerProps ) {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        function calculateTimeRemaining(): TimeRemaining {
            const now = new Date();
            const tomorrow = new Date();
            tomorrow.setHours(24, 0, 0, 0);

            const timeDiff = tomorrow.getTime() - now.getTime();

            const totalSeconds = Math.floor(timeDiff / 1000); // timeDiff is in milliseconds
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);

            if (hours == 0 && minutes == 0 && seconds == 0) {
                console.log("NEW");
                setIsNewDay(true);
                setTimeout(() => setIsNewDay(false), 50); // isolate call so batch state update does not occur
            }

            return { hours, minutes, seconds };
        }
        setTimeRemaining(calculateTimeRemaining());

        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);

    }, [])


    return (
        <div className="text-center mt-4 bg-main dark:bg-mainDark box-border text-xl">
            <p>
            {`Next quote: ${timeRemaining.hours.toString().padStart(2, "0")}:${timeRemaining.minutes.toString().padStart(2, "0")}:${timeRemaining.seconds.toString().padStart(2, "0")}`}
            </p>
        </div>
    )
}