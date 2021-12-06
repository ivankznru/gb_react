import React from 'react'
import './App.css'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import { ROUTES } from "../Router/constants";


function App() {
    return (
        <div className="app">
            <div className="header">
                <Link to={ROUTES.HOME}>Home</Link>
                <Link to={ROUTES.CHAT}>Chats</Link>
                <Link to={ROUTES.PROFILE}>Profile</Link>
            </div>

            <Router />
        </div>
    )
}

export default App
