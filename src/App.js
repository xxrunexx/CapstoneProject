// Import dependencies
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import views
import Login from './views/Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path='/' co2mponent={Home}/> */}
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
