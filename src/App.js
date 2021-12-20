import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Spaces from './pages/Spaces'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Reservations from './pages/Reservations'
import Logout from './pages/Logout'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/spaces">
          <Spaces />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/reservations">
          <Reservations />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
