// aaatodos los prop names e escriben en camelCase
// los atributos numericos se escriben entre llaves
// boolean true se escribir solo con el nombre de la propiedad, {false}, con llaves. ejemplo, quiero autoFocus en true, solo pongo autoFocus
// El atributo class se escribe como className
//

import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

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
              <ProfileCard titulo="Alexa" handle="@alexa22" imagen={AlexaImg} />
            </div>
            <div className="column is-4">
              <ProfileCard titulo="Siri" handle="@Siri10" imagen={SiriImg} />
            </div>
            <div className="column is-4">
              <ProfileCard
                titulo="Cortana"
                handle="@Cortana99"
                imagen={CortanaImg}
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default App;
