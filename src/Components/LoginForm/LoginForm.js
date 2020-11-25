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
        <div id="login-form">
            <h1>Inloggen</h1>
            <form>
                <div>
                    <input className="input-field" type="email" placeholder="e-mail" required onChange={e => setEmail(e.target.value)}></input>
                    <br />
                    <input className="input-field" type="password" placeholder="password" required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button type="Login" className="primary-button" onClick={submitCredentials}>Inloggen</button>
            </form>
        </div>
    )
}
