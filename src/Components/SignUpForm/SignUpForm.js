import React, { useState, useEffect } from 'react'

export default function SignUpForm() {

    const [email, setEmail] = useState("");
    
    function submitEmail (e) {
        console.log("clicked")
        e.preventDefault();
    }

    console.log(email);
    return (
        <div>
            <h1>Gratis series, films en meer kijken?</h1>
            <h2>Is Netflix te duur?</h2>
            <h3>Schrijf dan nu in en bekijk alles gratis!</h3>
            <form>
                <input type="email" required onChange = {e => setEmail(e.target.value)}></input>
                <button type="submit" onClick = {submitEmail}>AAN DE SLAG</button>
            </form>
        </div>
    )
}
