import React from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noopener noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    return (
      <div>
        <h2 className="title">Renderizado de elementos</h2>
        {this.state.season.map((el) => (
          <li key={el}>{el}</li>
        ))}
        <h3>Frameworks Frontend Javascript</h3>
        <ul>
          {data.frameworks.map((el, index) => (
            <ElementoLista key={index} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
