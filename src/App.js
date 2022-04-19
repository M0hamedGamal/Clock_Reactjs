import './App.css';
import {useState} from "react";

function App() {
    const deg = 6;
    let [hour, setHour] = useState(0)
    let [min, setMin] = useState(0)
    let [sec, setSec] = useState(0)

    setInterval(() => {
        let day = new Date();
        setHour(day.getHours() * 30)
        setMin(day.getMinutes() * deg)
        setSec(day.getSeconds() * deg)
    })

    return (
        <>
        <div className="clock">
            <div className='hour'>
                <div className='hr' style={{transform: `rotateZ(${hour + min / 12}deg)`}}/>
            </div>

            <div className='min'>
                <div className='mn' style={{transform: `rotateZ(${min}deg)`}}/>
            </div>

            <div className='sec'>
                <div className='sc' style={{transform: `rotateZ(${sec}deg)`}}/>
            </div>
        </div>
        </>
    );
}

export default App;
