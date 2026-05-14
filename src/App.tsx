import ColorHarmonizer from "./components/ColorHarmonizer";
import ContrasteChecker from "./components/ContrastChecker";
import ColorObjeto from "./components/ColorObjeto";
import CambioColor from "./components/CambioColor";

function App() {
  return (
    <div className="App">
      <h1>Clase de teoria del color con react</h1>
      <ColorHarmonizer />
      <hr />
      <ContrasteChecker />

      <h1>objeto con 4 colores</h1>
      <ColorObjeto />
      <h1>objeto cambio de color</h1>
      <CambioColor />
    </div>
  );
}

export default App;