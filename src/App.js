// import logo from './logo.svg';
import './App.css';
import Homedashboard from './views/HomeDashboard/HomeDashboard';
// import Detailinvoice from './views/DetailInvoice/DetailInvoice';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First Commit
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Homedashboard/>
      {/* <Detailinvoice/> */}
    </div>
  );
}

export default App;
