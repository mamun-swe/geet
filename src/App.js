import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/NavBar';
import Home from './Pages/Home/Home';
import SearchIndex from './Pages/Search/Index';
import CategoryIndex from './Pages/Category/Index';
import CategoryShow from './Pages/Category/Show';
import AlbumIndex from './Pages/Album/Index';
import AlbumShow from './Pages/Album/Show';
import SingerIndex from './Pages/Singer/Index';
import SingerShow from './Pages/Singer/Show';
import TermOfUse from './Pages/Static/TermOfUse';
import PrivacyPolicy from './Pages/Static/PrivacyPolicy';
import Help from './Pages/Static/Help';

// Account Routes
import AccountMaster from './Pages/Account/Master';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-results" component={SearchIndex} />
          <Route exact path="/category" component={CategoryIndex} />
          <Route exact path="/category/:id/:name" component={CategoryShow} />
          <Route exact path="/album" component={AlbumIndex} />
          <Route exact path="/album/:id/:name" component={AlbumShow} />
          <Route exact path="/singer" component={SingerIndex} />
          <Route exact path="/singer/:id/:name" component={SingerShow} />
          <Route exact path="/term" component={TermOfUse} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/help" component={Help} />
          {/* Account */}
          <Route path="/account" component={AccountMaster} />
          <Route path="*">
            <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
