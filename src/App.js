import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './views/Register';
// import Register from './views/Register/Register';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/register' component={Register}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
