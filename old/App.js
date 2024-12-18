import logo from "./logo.svg";
import "./App.css";
import { FaBeer } from "react-icons/fa";

const mmsg="export test and demo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <tb>
          <h1>
            Make an <u>e-commerce</u> thing
          </h1>
          <tr>A</tr>
          <tr>B</tr>
          <tr>C</tr>
          <tr>
            <FaBeer />
          </tr>
        </tb>
        <p>
          Change <code>src/App.js</code> and save to reload to make moar better.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to read more horrid stuff
        </a>
      </header>
    </div>
  );
}

export default App;
export {mmsg}