// aaatodos los prop names e escriben en camelCase
// los atributos numericos se escriben entre llaves
// boolean true se escribir solo con el nombre de la propiedad, {false}, con llaves. ejemplo, quiero autoFocus en true, solo pongo autoFocus
// El atributo class se escribe como className
//

import "./css/App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";

import ContentStage from "./components/ContentStage";

function App() {
  return (
    <body className="App">
      <Navbar />
      <ContentStage />
    </body>
  );
}

export default App;
