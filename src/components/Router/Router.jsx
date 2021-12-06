import React from 'react'
import { Switch, Route } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'
import Home from '../Home/Home'
import Chats from '../Chats/Chats'
import Profile from '../Profile/Profile'
import HomeContainer from '../Home/HomeContainer'
import { ROUTES } from "./constants";

export default function Router() {
    return (
        <Switch>
            <Route
                path={ROUTES.HOME}
                exact
                render={() => (
                    <React.Fragment>
                        <p>Container</p>
                        <HomeContainer />

                        <p>Component</p>
                        <Home
                            age={12}
                            name={'Alice'}
                            onChangeProfileName={(name) => console.log(name)}
                        />
                    </React.Fragment>
                )}
            />

            <Route exact path={ROUTES.CHAT} component={Chats} />

            <Route path={ROUTES.CHATS} component={Chat} />

            <Route path={ROUTES.PROFILE}>
                <Profile />
            </Route>

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}
