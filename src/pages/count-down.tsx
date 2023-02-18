import { useMemo, useRef, useState } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

interface CountDownProps {
    
}
 
const CountDown: React.FC<CountDownProps> = () => {
    const [value, setValue] = useState<string>("");
    const countDownRef = useRef<Countdown>(null);
    // const startDate = useRef(Date.now() + 1000 * 60);
    // const [date, setDate] = useState(Date.now() + 1000 * 60);
    const date = useMemo(() => {
        return Date.now() + 1000 * 60;
    },[])
    const handleRestart = () => {
        countDownRef.current?.api?.start();
    }
    const countDownRendere: CountdownRendererFn = ({
        hours,
        minutes,
        seconds,
        completed
    }) => {
        console.log(" Complete "+completed);
        if(completed){
            return <span onClick={handleRestart}>Restart</span>
        }else{
            return <span>Resend in {seconds == 0 ? 60 : seconds} sec...</span>
        }
    }
    return (  

        <div>
            <Countdown 
            date={date}
            ref={countDownRef}
            renderer={countDownRendere}/>
            <input className="bg-gray-200" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
}
 
export default CountDown;