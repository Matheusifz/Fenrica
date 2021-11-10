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
      <Cloud margin="120px 20px" />
      <Cloud margin=" 400px 40px" />
    </div>
  );
}

export default App;
