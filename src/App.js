import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Spaces from './pages/Spaces'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Reservations from './pages/Reservations'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="material-ui-website/#">
          <Home />
        </Route>
        <Route path="material-ui-website/#/spaces">
          <Spaces />
        </Route>
        <Route path="material-ui-website/#/booking">
          <Booking />
        </Route>
        <Route path="material-ui-website/#/contact-us">
          <Contact />
        </Route>
        <Route path="material-ui-website/#/profile">
          <Profile />
        </Route>
        <Route path="material-ui-website/#/my-reservations">
          <Reservations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
