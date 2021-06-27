import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloDeVida from "./components/CicloVida";
import AjaxApi from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHook";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPerzonalidos from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Curso Jonmircha
          </a>
        </section>
      </header>
      <section>
        <Componente msg="Funciona pasandole propiedas o props" />
        <hr />
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={false}
          arreglo={[1, 2, 3, 4, 5]}
          objeto={{ nombre: "jon", correo: "correo@gmail.com" }}
          elementosReact={<i>Esto es un elemento react</i>}
          funcion={(num) => num * num}
          ComponenteReact={<Componente msg="Componente pasado como prop" />}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloDeVida />
        <hr />
        <AjaxApi />
        <hr />
        <ContadorHooks />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPerzonalidos />
        <hr />
        <Referencias />
        <hr />
        <Formularios />
        <hr />
        <Estilos />
        <hr />
      </section>
    </div>
  );
}

export default App;
