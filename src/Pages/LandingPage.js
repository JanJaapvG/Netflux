import React, { useState, useEffect } from 'react'
import SignUpForm from '../Components/SignUpForm/SignUpForm';
import Toolbar from '../Components/Toolbar/Toolbar';

export default function LandingPage() {
    const [color, setColor] = useState("red");

    const [bool, setBool] = useState(false);
    const [value2, setValue2] = useState(0)

    const lights = bool ? "Lights are off!" : "lights are on!";

    
    function switchLights() {
        console.log(bool);       
        setBool(!bool);
    }
    
    function testMe() {
        console.log(color);
        setColor("blue");
        console.log(color);
    }
    
    console.log(lights);
   useEffect(()=>{
        setValue2(value2+1)
   },[bool])

   
    return (
        <div>
            <div className = "header-wrapper">
                <Toolbar></Toolbar>
            </div>
            
            <div className = "form-wrapper">
                <SignUpForm></SignUpForm>
            </div>
        </div>
    )
}
