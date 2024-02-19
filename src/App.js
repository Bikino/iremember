
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Homepage from "./pages/homepage/Homepage";
import Cards from "./components/cards/Cards";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <>
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/card/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
