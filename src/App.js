import * as React from 'react'
import './App.css';
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import State from "./context/State";
import Lyrics from "./components/tracks/Lyrics";


function App() {
  return (
      <State>
          <Router>
              <React.Fragment>
                  <Navbar />
                  <div className="container">
                      <Switch>
                          <Route exact path='/' component={Index}/>
                          <Route exact path='/lyrics/track/:id' component={Lyrics}/>
                      </Switch>
                  </div>
              </React.Fragment>
          </Router>
      </State>

  );
}

export default App;
