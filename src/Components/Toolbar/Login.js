import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div id="login-button">
            <Link to='/login'>
                <button className="primary-button">Login</button>
            </Link>
        </div>
    )
}
