import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import ForgetPass from './views/ForgetPass/ForgetPass';
import Home from './views/HomeDashboard/HomeDashboard';
import Detailinvoice from './views/DetailInvoice/DetailInvoice';
import Newinvoice from './views/NewInvoice/NewInvoice';
import Register from './views/Register';
// import Register from './views/Register/Register';
import NewPass from './views/NewPass/NewPass';
import Newclient from './views/NewClient/NewClient';
import BillIssuerUpdated from './views/BillIssuerUpdated/BillIssuerUpdated';
import ProfileUpdated from './views/ProfileUpdated/ProfileUpdated';
import PassUpdated from './views/PassUpdated/PassUpdated';
import Dashboarddraft from './views/Dashboard/DashboardDraft';
import Dashboardpaid from './views/Dashboard/DashboardPaid';
import Dashboardunpaid from './views/Dashboard/DashboardUnpaid';
import Dashboardprocessed from './views/Dashboard/DashboardProcessed';
import Editinvoice from './views/EditInvoice/EditInvoice';
import DashboardClient from './views/Dashboard/DashboardClient';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/register' component={Register}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dashboard/draft' component={Dashboarddraft}/>
          <Route exact path='/dashboard/paid' component={Dashboardpaid}/>
          <Route exact path='/dashboard/unpaid' component={Dashboardunpaid}/>
          <Route exact path='/dashboard/processed' component={Dashboardprocessed}/>
          <Route exact path='/editInvoice' component={Editinvoice}/>
          <Route exact path='/detail' component={Detailinvoice}/>
          <Route exact path='/addInvoice' component={Newinvoice}/>
          <Route exact path='/addClient' component={Newclient}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/newPass' component={NewPass}/>
          <Route exact path='/forgetpass' component={ForgetPass}/>
          <Route exact path='/billIssuerUpdated' component={BillIssuerUpdated}/>
          <Route exact path='/clientupdated' component={ProfileUpdated}/>
          <Route exact path='/passUpdated' component={PassUpdated}/>
          <Route exact path='/client' component={DashboardClient}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
