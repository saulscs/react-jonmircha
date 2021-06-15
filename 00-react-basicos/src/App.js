import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

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
        <Componente msg="Funciona pasandole propiedas o props"/>
        <hr/>
        <Propiedades 
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={false}
          arreglo={[1,2,3,4,5]}
          objeto={{nombre:'jon', correo:'correo@gmail.com'}}
          elementosReact={<i>Esto es un elemento react</i>}
          funcion={num => num*num}
          ComponenteReact={<Componente msg="Componente pasado como prop"/>}
        />
      </section>
    </div>
  );
}

export default App;
