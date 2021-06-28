import React from "react";
import Bootstrap from "./Components/Booststrap";
import Bulma from "./Components/Bulma";
import ReactBooststrap from "./Components/ReactBooststrap";
import MaterialUIReact from "./Components/MaterialUI";

function App() {
  return (
    <div>
      <h1>Frameworks CSS con React</h1>
      <p>Descomentar los componentes y cdn para poder ver los estilos</p>
      <Bootstrap />
      <hr />
      <Bulma />
      <hr />
      <ReactBooststrap />
      <hr />
      <MaterialUIReact />
    </div>
  );
}

export default App;
