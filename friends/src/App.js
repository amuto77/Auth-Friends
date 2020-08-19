import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
            <p>
              <Link to='/login'> Home </Link>
            </p>
            <p>
            <Link to='/protected'> Register </Link>
            </p> 
        </div>
        <div className="login">
          <Switch>
            <PrivateRoute path='/protected' component={FriendsList}  />
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
