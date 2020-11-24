import React from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email,password);
    
    return (
        <div id = "loginForm">
            <h1>Inloggen</h1>
                <form>
                    <input type="email" required onChange = {e => setEmail(e.target.value)}></input>
                    <input type="password" required onChange = {e => setPassword(e.target.value)}></input>
                    <button type="Login">AAN DE SLAG</button>
                </form>
        </div>
    )
}
