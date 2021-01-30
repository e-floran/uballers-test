import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GroundsList from "./components/groundsList";
import Ground from "./components/ground";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Uballers</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <GroundsList />
          </Route>
          <Route path="/:id">
            <Ground />
          </Route>
        </Switch>
        <footer>
          <p>Floran Eiclies</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
