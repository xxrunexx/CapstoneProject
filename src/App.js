import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import Paymentmethod from './views/PaymentMethod/PaymentMethod';
import Newpayment from './views/NewPaymentMethod/newPayment';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("loggedIn") === "bill_issuer" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

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
            exact path='/client' 
            component={DashboardClient} 
          />
          <Route 
            exact path='/detail' 
            component={Detailinvoice} 
          />
          <Route 
            exact path='/forgetpass'
            component={ForgetPass}
          />
          <Route 
            exact path='/newPass'
            component={NewPass}
          />
          <Route 
            exact path='/passUpdated' 
            render={PassUpdated} 
          />
          <PrivateRoute exact path='/dashboard' >
            <Dashboardbillissuer/>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/draft'>
            <Dashboarddraft/>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/paid'>
            <Dashboardpaid/>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/unpaid'>
            <Dashboardunpaid/>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/processed'>
            <Dashboardprocessed/>
          </PrivateRoute>
          <PrivateRoute exact path='/editInvoice'>
            <Editinvoice/>
          </PrivateRoute>
          <PrivateRoute exact path='/addInvoice'>
            <Newinvoice/>
          </PrivateRoute>
          <PrivateRoute exact path='/addClient'>
            <Newclient/>
          </PrivateRoute>
          <PrivateRoute exact path='/billissuer'>
            <BillIssuerInfo/>
          </PrivateRoute>
          <PrivateRoute exact path='/billIssuerUpdated'>
            <BillIssuerUpdated/>
          </PrivateRoute>
          <PrivateRoute exact path='/paymentMethod'>
            <Paymentmethod/>
          </PrivateRoute>
          <PrivateRoute exact path='/addPaymentMethod'>
            <Newpayment/>
          </PrivateRoute>
          <PrivateRoute 
            exact path='/clientupdated' 
            render={ProfileUpdated} 
            history={history}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;


