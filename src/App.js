import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dataLayer.push({
                event: 'LICK_CLICK_EVENT_NAME',
                where: 'mainpage'
              })
            }}
        >
          Learn React
        </a>

        <button
            className="App-link"
            onClick={() => {
              window.dataLayer.push({
                event: 'ZALUPOVICH',
                where: 'mainpage'
              })
            }}
        >
          ZALUPA
        </button>
      </header>
    </div>
  );
}

export default App;
