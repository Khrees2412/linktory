import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import DashBoard from "./components/DashBoard"
import AddLink from "./components/AddLink"
import {ViewLinks,Settings} from "./components/DashComponents"
import SignIn from "./components/auth/SignupForm";
import LogIn from "./components/auth/LoginForm";
import Home from "./components/Home"
import { TitleProvider, UrlProvider, ItemProvider } from "./context/AddContext";
import PrivateRoute from "./components/privateRoute"

function App() {
  return (
    <ItemProvider>
    <UrlProvider>
    <TitleProvider>
    <Router>
    


    <Switch>
      <Route exact path="/view_links" component={ViewLinks} />
      <Route exact path="/add_link" component={AddLink} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/login" component={LogIn} />
      <PrivateRoute exact path="/dashboard" component={DashBoard} />
      <Route exact path="/" component={Home} />
      
    </Switch>
    </Router>
    </TitleProvider>
    </UrlProvider>
    </ItemProvider>
  );
}

export default App;
