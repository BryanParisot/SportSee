import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profil from "./pages/Profil";
import Community from "./pages/Community";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil/:id" exact component={Profil} />
        <Route path="/community" exact component={Community} />
        <Route path="/setting" exact component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
