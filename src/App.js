// aaatodos los prop names e escriben en camelCase
// los atributos numericos se escriben entre llaves
// boolean true se escribir solo con el nombre de la propiedad, {false}, con llaves. ejemplo, quiero autoFocus en true, solo pongo autoFocus
// El atributo class se escribe como className
//

import "./css/App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";

import ContentStage from "./components/ItemListContainer";

function App() {
  return (
    <body className="App">
      <Navbar />
      <ContentStage greetingMessage={`These are some of the available models in stock`} />
    </body>
  );
}

export default App;
