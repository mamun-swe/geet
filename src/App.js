import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import AlbumIndex from './Pages/Album/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/album" component={AlbumIndex} />
          <Route path="*">
            <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
