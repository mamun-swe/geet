import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './pages/home/Index'
import SearchIndex from './pages/search/Index'
import CategoryIndex from './pages/category/Index'
import CategoryShow from './pages/category/Show'
import AlbumIndex from './pages/album/Index'
import AlbumShow from './pages/album/Show'
import SingerIndex from './pages/singer/Index'
import SingerShow from './pages/singer/Show'
// import TermOfUse from './Pages/Static/TermOfUse';
// import PrivacyPolicy from './Pages/Static/PrivacyPolicy';
// import Help from './Pages/Static/Help';

// Account master
import AccountMaster from './pages/account/Master'

// Admin master
import AdminMaster from './pages/admin/master/Index'
import ScrollToTop from './components/scrollToTop/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search-results" component={SearchIndex} />
            <Route exact path="/category" component={CategoryIndex} />
            <Route exact path="/category/:slug" component={CategoryShow} />
            <Route exact path="/album" component={AlbumIndex} />
            <Route exact path="/album/:slug" component={AlbumShow} />
            <Route exact path="/singer" component={SingerIndex} />
            <Route exact path="/singer/:slug" component={SingerShow} />
            {/*   <Route exact path="/term" component={TermOfUse} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/help" component={Help} />
    */}

            <Route path="/account" component={AccountMaster} />
            <Route path="/admin" component={AdminMaster} />
            <Route path="*">
              <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
