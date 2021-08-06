import {useRef} from 'react'
import IMG_BG from '../images/bg.jpg'


export default function Start({setUsername}) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }
        return (
            <div className="start">
                <img  src={IMG_BG} alt="WWTBAM IMG" className="startImg"/>
               <h1 className="startHeader">Hi, Welcome to Who Wants to Be a Milloionaire</h1>
                <h5>Enter your Username to Play</h5>
                <input placeholder="Enter your name" className="startInput" ref={inputRef}/>
                <button className="startButton" onClick={handleClick}>Start</button>
            </div>
        )
}