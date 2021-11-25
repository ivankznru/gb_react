import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import "../App/App.css";
import App from "../App/App";
import Chat from "../Chat/Chat";
import { ROUTES } from "./constants";

export default function Router() {
  return (
    <div>
      <div className="bordered">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.CHAT}>Chats</Link>
        <Link to={ROUTES.PROFILE}>Profile</Link>
      </div>

      <Switch>
        <Route path={ROUTES.HOME} exact component={App} />
        <Route exact path={ROUTES.CHAT} render={() => <p>Chats page</p>} />
        <Route path={ROUTES.CHATS} render={() => <Chat />} />
        <Route path={ROUTES.PROFILE}>
          <p>Profile page</p>
        </Route>
        <Route path={ROUTES.NOT_FOUND}>
          <p>404: not found</p>
        </Route>
      </Switch>
    </div>
  );
}
