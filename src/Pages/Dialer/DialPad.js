import React, { useEffect, useState } from 'react'
import { ImPhoneHangUp } from 'react-icons/im'
import { FaPause, FaPlay } from 'react-icons/fa'
import { BsFillBackspaceFill, BsFillMicMuteFill, BsFillMicFill, BsFillTelephoneForwardFill } from 'react-icons/bs';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import audiofile from '../../assets/audio/mixkit-modern-technology-select-3124.wav'
const DialPad = (props) => {
    //Display Mute unmute
    const [Mute, setMute] = useState(false);
    //Display Play Pause
    const [Hold, setHold] = useState(false);
    //Display Call
    const [Call, setCall] = useState(false);
    //Display Call Hang
    const [Hang, setHang] = useState(false);
    // On number click audio
    const audio = new Audio(audiofile);
    const [result, setResult] = useState("");
    //Timer
    const [startTimer, setstartTimer] = useState(false);
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [hour, setHour] = useState('00');
    const [counter, setCounter] = useState(0);
    const {DiledNumber} = props;
    // console.log("latest",props.DiledNumber)
    useEffect(() => {
        // console.log("DialedNumber",result,DiledNumber)
        if(DiledNumber){
            setResult(DiledNumber)
        }
    },[DiledNumber])
    useEffect(() => {
        let intervalId;
        if (startTimer) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);
                const hourCounter = Math.floor(counter / 60 / 60);
                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
                const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter;
                setSecond(computedSecond);
                setMinute(computedMinute);
                setHour(computedHour)
                setCounter(counter => counter + 1);
            }, 1000)
        }
        return () => clearInterval(intervalId);
    }, [startTimer, counter])
    //reset Timer
    function stopTimer() {
        setstartTimer(false);
        setCounter(0);
        setSecond('00');
        setMinute('00')
        setHour('00')
    }
    //Number from Dialpad
   
    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
        audio.play();
    }
    const backSpace = (e) => {
        setResult(result.slice(0, result.length - 1))
    }
    const handleMute = () => {
        if (Call) {
            if (!Mute) {
                setMute(true)
                console.log('Call Muted')
            }
            else {
                setMute(false)
                console.log('Call Unmuted')
            }
        }
        else {
            console.log("Dial Call First")
        }
    }
    const handleHold = () => {
        if (Call) {
            if (!Hold) {
                setHold(true)
                console.log('Call Hold')
            }
            else {
                setHold(false)
                console.log('Call UnHold')
            }
        }
        else {
            console.log("Dial Call First")
        }
    }
    const handleCall = () => {
        if (result.length > 1) {
            setCall(true)
            setstartTimer(true)
            console.log('Call Dialed', result)
        }
        else {
            console.log('Enter number first')
        }
    }
    const handleCallHang = () => {
        if (Call) {
            setHang(true)
            console.log("CallTime:", hour, ":", minute, ":", second)
            stopTimer();
            console.log('Call Ended')
            setResult("")
        }
        else {
            console.log('Dial call first')
            setHang(false)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.result.value)
      }
    return (
        <div className='Number-box'>
            <div className="DialTable">
                <div className='DialPadLayOut'>
                    <form className='d-flex align-items-center mx-4 mb-2' onSubmit={handleSubmit}>
                        <PhoneInput
                            // value={result} placeholder="phone number"
                            placeholder="phone number"
                        
                            
                            inputProps={{
                                name: "result",
                                required: true,
                                autoFocus: true,
                            }}
                            value={result}  
                            // onChange={handleClick}   
                            
                                               
                        />
                        {/* <input type="submit" value="Submit"></input> */}
                    </form>
                    <div className='d-flex justify-content-center time'>
                        <div>{hour}</div>:
                        <div>{minute}</div> :
                        <div>{second}</div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button name="1" onClick={handleClick} className='DialNumber'>1</button>
                        <button name="2" onClick={handleClick} className='DialNumber'>2</button>
                        <button name="3" onClick={handleClick} className='DialNumber'>3</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button name="4" onClick={handleClick} className='DialNumber'>4</button>
                        <button name="5" onClick={handleClick} className='DialNumber'>5</button>
                        <button name="6" onClick={handleClick} className='DialNumber'>6</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button name="7" onClick={handleClick} className='DialNumber'>7</button>
                        <button name="8" onClick={handleClick} className='DialNumber'>8</button>
                        <button name="9" onClick={handleClick} className='DialNumber'>9</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button name="*" onClick={handleClick} className='DialNumber'>*</button>
                        <button name="0" onClick={handleClick} className='DialNumber'>0</button>
                        <button name="#" onClick={handleClick} className='DialNumber'>#</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleMute} className={` ${!startTimer ? 'disableFun' : 'DialNumber'}`}>{!Mute ? <BsFillMicMuteFill title='Mute' /> : <BsFillMicFill title="Unmute" />}</button>
                        <button onClick={handleHold} className={` ${!startTimer ? 'disableFun' : 'DialNumber'} `}>{!Hold ? <FaPause title='Hold' /> : <FaPlay title='UnHold' />}</button>
                        <button onClick={backSpace} className='DialNumber'><BsFillBackspaceFill title='Backspace' /></button>
                    </div>
                    <div className='d-flex mx-5 mt-2'>
                        <button title="Call"
                            className={` ${startTimer ? 'disable' : 'DialIcons phoneCall'}`}
                            onClick={handleCall} ><BsFillTelephoneForwardFill /></button>
                        <button title="Hang"
                            className={` ${!startTimer ? 'disable' : 'DialIcons phoneCall'}`}
                            onClick={handleCallHang} ><ImPhoneHangUp /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DialPad
