import React, { useState, useEffect } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function submitCredentials(e) {
        console.log(email);
        console.log(password);
        e.preventDefault();
    }
    
    return (
        <div id = "loginForm">
            <h1>Inloggen</h1>
                <form>
                    <input className = "input-field" type="email" required onChange = {e => setEmail(e.target.value)}></input>
                    <input className = "input-field" type="password" required onChange = {e => setPassword(e.target.value)}></input>
                    <button type="Login" className = "primary-button" onClick = {submitCredentials}>LOGIN</button>
                </form>
        </div>
    )
}
