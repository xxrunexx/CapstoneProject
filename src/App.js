import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import ForgetPass from './views/ForgetPass/ForgetPass';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/forgetpass' component={ForgetPass}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
