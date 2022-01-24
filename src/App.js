import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import Login from './views/Login';
import ForgetPass from './views/ForgetPass/ForgetPass';
import Home from './views/HomeDashboard/HomeDashboard';
import Detailinvoice from './views/DetailInvoice/DetailInvoice';
import Newinvoice from './views/NewInvoice/NewInvoice';
import Register from './views/Register';
import Registerdetail from './views/RegisterDetail';
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
import Dashboardbillissuer from './views/DashboardBillIssuer/DashboardBillIssuer';
import BillIssuerInfo from './views/BillIssuerInfo/BillIssuerInfo';

function App() {
  const history = useHistory();
  return (
    <>
      <Router>
        <Switch>
          <Route 
            exact path='/' 
            component={Home} 
          />
          <Route 
            exact path='/login' 
            component={Login} 
          />
          <Route 
            exact path='/register' 
            component={Register} 
          />
          <Route 
            exact path='/registerDetail' 
            component={Registerdetail} 
          />
          <Route 
            exact path='/dashboard' 
            component={Dashboardbillissuer} 
          />
          <Route exact path='/dashboard/draft' component={Dashboarddraft} 
            history={history}/>
          <Route exact path='/dashboard/paid' component={Dashboardpaid} 
            history={history}/>
          <Route exact path='/dashboard/unpaid' component={Dashboardunpaid} 
            history={history}/>
          <Route exact path='/dashboard/processed' component={Dashboardprocessed} 
            history={history}/>
          <Route exact path='/editInvoice' component={Editinvoice} 
            history={history}/>
          <Route exact path='/detail' component={Detailinvoice} 
            history={history}/>
          <Route exact path='/addInvoice' component={Newinvoice} 
            history={history}/>
          <Route exact path='/addClient' component={Newclient} 
            history={history}/>
          <Route exact path='/newPass' component={NewPass} 
            history={history}/>
          <Route exact path='/forgetpass' component={ForgetPass} 
            history={history}/>
          <Route exact path='/billIssuerUpdated' component={BillIssuerUpdated} 
            history={history}/>
          <Route exact path='/clientupdated' component={ProfileUpdated} 
            history={history}/>
          <Route exact path='/passUpdated' component={PassUpdated} 
            history={history}/>
          <Route exact path='/client' component={DashboardClient} 
            history={history}/>
          <Route exact path='/billissuer' component={BillIssuerInfo} history={history}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;


