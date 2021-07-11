import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
          </Route>
          <Route path="/acerca">
            <h3>Acerca</h3>
          </Route>
          <Route path="/contacto">
            <h3>Contacto</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
