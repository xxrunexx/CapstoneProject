import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './views/Register';
// import Register from './views/Register/Register';
import Login from './views/Login';
import ForgetPass from './views/ForgetPass/ForgetPass';
import Home from './views/HomeDashboard/HomeDashboard';
import Detailinvoice from './views/DetailInvoice/DetailInvoice';
import Newinvoice from './views/NewInvoice/NewInvoice';
import Newclient from './views/NewClient/NewClient';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/register' component={Register}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail' component={Detailinvoice}/>
          <Route exact path='/addInvoice' component={Newinvoice}/>
          <Route exact path='/addClient' component={Newclient}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/forgetpass' component={ForgetPass}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
