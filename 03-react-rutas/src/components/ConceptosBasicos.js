import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import Error404 from "../pages/Error404";
import MenuConceptos from "../components/MenuConceptos";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

//Conceptos basicos de enrutamiento

// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>Conceptos Basicos</h2>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <h3>Home</h3>
//           </Route>
//           <Route exact path="/acerca" component={Acerca} />
//           <Route exact path="/contacto" component={Contacto} />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

export default ConceptosBasicos;
