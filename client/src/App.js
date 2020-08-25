import React from 'react';
import DashBoard from "./components/DashBoard"
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AddLink from "./components/AddLink"
import {ViewLinks,LogOut,Settings} from "./components/DashComponents"
import {LogIn, SignIn} from "./components/Onboard"
import Home from "./components/Home"
import { TitleProvider, LinkProvider, ItemProvider } from "./context/AddContext"

function App() {
  return (
    <ItemProvider>
    <LinkProvider>
    <TitleProvider>
    <Router>
    


    <Switch>
      <Route path="/view_links" component={ViewLinks} />
      <Route path="/add_link" component={AddLink} />
      <Route path="/settings" component={Settings} />
      <Route path="/logout" component={LogOut} />
      <Route path="/signin" component={SignIn} />
      <Route path="/login" component={LogIn} />
      <Route path="/dashboard" component={DashBoard} />
      <Route exact path="/" component={Home} />

    </Switch>
    </Router>
    </TitleProvider>
    </LinkProvider>
    </ItemProvider>
  );
}

export default App;
