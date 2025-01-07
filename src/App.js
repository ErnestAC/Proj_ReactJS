import "./css/App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";

import ContentStage from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentStage
        greetingMessage={`These are some of the available models in stock`}
      />
    </div>
  );
}

export default App;
