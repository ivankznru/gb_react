import React from 'react'
import './App.css'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from '../../Store/Profile/actions'
import { ROUTES } from "../Router/constants";

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })

            dispatch(changeIsAuthed(Boolean(user)))
        })
    }, [])

    const handleSignOut = (e) => {
        e.preventDefault()

        firebase.auth().signOut()
    }

    return (
        <div className="app">
            <div className="header">
                <Link to={ROUTES.HOME}>Home</Link>
                <Link to={ROUTES.CHAT}>Chats</Link>
                <Link to={ROUTES.PROFILE}>Profile</Link>
                <Link to={ROUTES.NEWS}>News</Link>
                <Link to={ROUTES.LOGIN}>Login</Link>
                <a href="/" onClick={handleSignOut}>
                    Sign out
                </a>
            </div>

            <Router />
        </div>
    )
}

export default App
