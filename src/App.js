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
