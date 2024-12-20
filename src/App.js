// aaatodos los prop names e escriben en camelCase
// los atributos numericos se escriben entre llaves
// boolean true se escribir solo con el nombre de la propiedad, {false}, con llaves. ejemplo, quiero autoFocus en true, solo pongo autoFocus
// El atributo class se escribe como className
//

import ARCoImg from "./img/arco.png";
import AlstomImg from "./img/alstom.png";
import SiemensImg from "./img/siemens.png";

import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <header className="App">
      <Navbar />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                titulo="ARCo"
                handle="V12 Diesel-Electric"
                imagen={ARCoImg}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                titulo="Siemens"
                handle="Electric @ 15kV"
                imagen={SiemensImg}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                titulo="Alstom"
                handle="I16 Diesel-Electric"
                imagen={AlstomImg}
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default App;
