import Cloud from "./components/Cloud";
import FocalPoint from "./components/Handwriting";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <FocalPoint />
      <Cloud />
    </div>
  );
}

export default App;
