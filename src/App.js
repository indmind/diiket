import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Teams from './pages/Teams/Teams';
import Policy from './pages/Policy/Policy';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/policy" component={Policy} />
      </Switch>
    </Router>
  );
}

export default App;
