
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";

import Home from './pages/home/Home';
import Topbar from './components/TopBar/Topbar';
 import AddPost from './pages/addPost/AddPost';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Indicators from "./pages/indicators/Indicators";
import Formations from "./pages/formations/Formations";

function App() {
  const user=false; 
  return (
    <Router>
    <Topbar/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
     <Route path="/login">
        {user? <Home/>:<Login/>}
      </Route>
      <Route path="/register">
        {user? <Home/> :<Register/>}
      </Route>
      <Route path="/addPost">
      {user? <AddPost/>:<Login />}
      </Route>
      <Route path="/source/:sourceId">
        <Single />
      </Route>
      <Route path="/settings">
      {user? <Settings/>:<Login />}
      </Route>
      <Route path="/source/indicators">
        <Indicators />
      </Route>
      <Route path="/source/formations">
        <Formations />
      </Route>
      

    </Switch>
    </Router>
  );
}

export default App;
