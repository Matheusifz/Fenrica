import Cloud from "./components/Cloud";
import FocalPoint from "./components/Handwriting";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <FocalPoint />
      {/*       <Cloud margin="120px 20px" />
       */}
      {/*       <Cloud margin="-40px 70vw" />
       */}
      <Hero />
    </div>
  );
}

export default App;
