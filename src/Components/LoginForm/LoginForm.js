import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <h1>Inloggen</h1>
                <form>
                    <input type="email" required onChange = {e => setEmail(e.target.value)}></input>
                    <input type="password" required onChange = {e => setEmail(e.target.value)}></input>
                    <button type="Login">AAN DE SLAG</button>
                </form>
        </div>
    )
}
