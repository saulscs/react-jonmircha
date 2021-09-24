import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>Lorem ipsum</p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de react</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de react</h4>
          <p>Lorem ipsum</p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
