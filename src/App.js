// Import dependencies
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import views
import Login from './views/Login';
import Home from './views/HomeDashboard/HomeDashboard';
import Detailinvoice from './views/DetailInvoice/DetailInvoice';
import Newinvoice from './views/NewInvoice/NewInvoice';
import Newclient from './views/NewClient/NewClient';
import Dashboarddraft from './views/Dashboard/DashboardDraft';
import Dashboardpaid from './views/Dashboard/DashboardPaid';
import Dashboardunpaid from './views/Dashboard/DashboardUnpaid';
import Dashboardprocessed from './views/Dashboard/DashboardProcessed';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dashboard/draft' component={Dashboarddraft}/>
          <Route exact path='/dashboard/paid' component={Dashboardpaid}/>
          <Route exact path='/dashboard/unpaid' component={Dashboardunpaid}/>
          <Route exact path='/dashboard/processed' component={Dashboardprocessed}/>
          <Route exact path='/detail' component={Detailinvoice}/>
          <Route exact path='/addInvoice' component={Newinvoice}/>
          <Route exact path='/addClient' component={Newclient}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
