import React, {useState} from "react";
import './DigitalClock.css'
const DigitalClock = () => {
    let [hour, setHour] = useState(0)
    let [min, setMin] = useState(0)
    let [sec, setSec] = useState(0)

    setInterval(() => {
        let day = new Date();
        setHour(day.getHours())
        setMin(day.getMinutes())
        setSec(day.getSeconds())
    })

    return (
        <div className='digital-clock-container'>
            <div className="digital-clock">
                <div className='time'>
                    <div className='box'><span>{hour}</span><span>Hours</span></div>
                    <div className='box'><span>{min}</span><span>Minutes</span></div>
                    <div className='box'><span>{sec}</span><span>Seconds</span></div>

                </div>
            </div>
        </div>
    )

}

export default DigitalClock