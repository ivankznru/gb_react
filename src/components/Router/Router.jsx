import React from 'react'
import { Switch, Route } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'
import Home from '../Home/Home'
import Chats from '../Chats/Chats'
import Profile from '../Profile/Profile'
import { ROUTES } from "./constants";

export default function Router(props) {
    return (
        <Switch>
            <Route
                path={ROUTES.HOME}
                exact
                render={() => (
                    <Home
                        chats={props.chats}
                        currentChat={props.currentChat}
                        onCurrentChatChange={props.onCurrentChatChange}
                    />
                )}
            />

            <Route
                exact
                path={ROUTES.CHAT}
                render={() => (
                    <Chats
                        chats={props.chats}
                        currentChat={props.currentChat}
                        onCurrentChatChange={props.onCurrentChatChange}
                        getIsChatExists={props.getIsChatExists}
                        onAddChat={props.onAddChat}
                        onRemoveChat={props.onRemoveChat}
                    />
                )}
            />

            <Route
                path={ROUTES.CHATS}
                render={() => {
                    return <Chat getIsChatExists={props.getIsChatExists} />
                }}
            />

            <Route path={ROUTES.PROFILE}>
                <Profile />
                <p>Profile page</p>  
            </Route>

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}
