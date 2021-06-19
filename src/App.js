import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Teams from './pages/Teams';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/teams" component={Teams} />
      </Switch>
    </Router>
  );
}

export default App;
