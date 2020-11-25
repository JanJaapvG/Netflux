import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function Toolbar() {
    // declarations


    // variables


    // funtions


    // useeffect


    // Rendering
    return (
        <div className="header-wrapper">
            <div className="header">
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <div id="title">
                        <h1 className="title">Netflux</h1>
                    </div>
                </Link>
                <Login />
            </div>
        </div>
    )
}
