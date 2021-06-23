import React from "react";

//Componente de funcion declarada

function Componente(props) {
  return <h2 style={{ color: "red" }}>{props.msg}</h2>;
}

//Componente de clase
//  class Componente extends React.Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

//Componente funcional expresada
//const Componente = (props) => <h1>{props.msg}</h1>;

export default Componente;
