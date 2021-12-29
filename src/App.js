// Import dependencies
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import views
import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
