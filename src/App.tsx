import ColorHarmonizer from "./components/ColorHarmonizer";
import ContrasteChecker from "./components/ContrastChecker";
import ColorObjeto from "./components/ColorObjeto";

function App() {
  return (
    <div className="App">
      <h1>Clase de teoria del color con react</h1>
      <ColorHarmonizer />
      <hr />
      <ContrasteChecker />

      <h1>objeto que cambie de color</h1>
      <ColorObjeto />
    </div>
  );
}

export default App;