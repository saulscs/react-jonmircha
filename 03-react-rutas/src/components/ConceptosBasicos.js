import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import Error404 from "../pages/Error404";
import MenuConceptos from "../components/MenuConceptos";
import ReactTopics from "../pages/ReactTopics";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>HashRouter</h2>
      <HashRouter>
        <nav>
          <Link to ="/">Home</Link>
          <Link to ="/acerca">Acerca</Link>
          <Link to ="/contacto">Contacto</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/acerca" component={Acerca} />
            <Route exact path="/contacto" component={Contacto} />
          </Switch>
        </nav>
      </HashRouter>
      <h2>Conceptos Basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          <Route path="/reactTopics" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
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
