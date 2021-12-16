import React from "react";
import { Switch, Route, Redirect } from "react-router";
import "../App/App.css";
import Chat from "../Chat/Chat";
import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import Profile from "../Profile/Profile";
import HomeContainer from "../Home/HomeContainer";
import News from "../News/News";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { ROUTES } from "./constants";

const PrivateRoute = (props) => {
  const isAuthed = useSelector((state) => state.profile.isAuthed);

  return isAuthed ? <Route {...props} /> : <Redirect to="/login" />;
};

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
              name={"Alice"}
              onChangeProfileName={(name) => console.log(name)}
            />
          </React.Fragment>
        )}
      />

      <PrivateRoute exact path={ROUTES.CHAT} component={Chats} />

      <PrivateRoute path={ROUTES.CHATS} component={Chat} />

      <PrivateRoute path={ROUTES.PROFILE}>
        <Profile />
      </PrivateRoute>

      <Route path={ROUTES.LOGIN} component={Login} />

      <Route path={ROUTES.NEWS} component={News} />

      <Route>
        <p>404: not found</p>
      </Route>
    </Switch>
  );
}
