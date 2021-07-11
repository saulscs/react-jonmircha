import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
          </Route>
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
