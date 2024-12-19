// aaatodos los prop names e escriben en camelCase
// los atributos numericos se escriben entre llaves
// boolean true se escribir solo con el nombre de la propiedad, {false}, con llaves. ejemplo, quiero autoFocus en true, solo pongo autoFocus
// El atributo class se escribe como className
//

import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css"
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard"

function SayThis(something) {
  return <h3>{something}</h3>;
}
function AddBox() {
  return <input type="number" min={1} max={5} className="App-input" />; // self-closing tag
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
          <ProfileCard titulo="abc1"/>
          <ProfileCard titulo="def2"/>
          <ProfileCard titulo="ghi3" handle="2han"/>
        <p>
          Change <code>src/App.js</code> and save to reload to make moar better.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {SayThis("horrible stuff")}
        </a>
        {AddBox()}
      </header>
    </div>
  );
}

export default App;
