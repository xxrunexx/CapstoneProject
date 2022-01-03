// Import dependencies
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import views
import Login from './views/Login';
import Home from './views/HomeDashboard/HomeDashboard';
import Detailinvoice from './views/DetailInvoice/DetailInvoice';
import Newinvoice from './views/NewInvoice/NewInvoice';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail' component={Detailinvoice}/>
          <Route exact path='/addInvoice' component={Newinvoice}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
