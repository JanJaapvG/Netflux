import React, { useState, useEffect } from 'react'

export default function SignUpForm() {

    const [email, setEmail] = useState("");
    
    function submitEmail (e) {
        console.log("clicked")
        e.preventDefault();
    }

    console.log(email);
    return (
        <div id= "SignUpForm">
            <h1>Gratis series, films en meer kijken?</h1>
            <h2>Is Netflix te duur?</h2>
            <h3>Schrijf je dan nu in en bekijk alles gratis!</h3>
            <form>
                <input className = "input-email" type="email" required placeholder = "Vul hier je e-mail adres in" onChange = {e => setEmail(e.target.value)}></input>
                <button id = "submit-button" className = "primary-button" type="submit" onClick = {submitEmail}>AAN DE SLAG</button>
            </form>
        </div>
    )
}
