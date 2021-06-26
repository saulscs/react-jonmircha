import React  from "react";

export  class EventosES6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar(e) {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2 style={{ color: "red" }}>Eventos en componentes de clase en ES6</h2>
        <nav>
          <button onClick={() => this.sumar()}>+</button>
          <button onClick={() => this.restar()}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}


export  class EventosES7 extends React.Component {
  state = {
    contador: 0,
  }
  //Arrow functions
  sumar = (e) => {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2 style={{ color: "red" }}>Eventos en componentes de clase en ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

function Boton(props){
  return (<button onClick={props.myOnClick}>Boton hecho componente</button>)
}

// Arrow function tiene el return implicito
// const Boton = (props) => {
//   <button onClick={props.myOnClick}>Boton hecho componente</button>
// }

//Destrucuturado ya no necesitamos el props
// const Boton = ({myOnClick}) => {
//   <button onClick={myOnClick}>Boton hecho componente</button>
// }




export class MasSobreEventos extends React.Component {
  handleClick = (e) => {
    console.log(e);
  }
  render(){
    return(
      <div>
        <h2 style={{ color: "red" }}>Mas sobre eventos</h2>
        {/*Evento para jsx */}
        <button onClick={(e) =>
          this.handleClick(e, 'Pasando parametros desde un evento jsx')}>
          Saludar
        </button>
        {/*Evento personalizado */}
        <Boton
          myOnClick={(e) =>
          this.handleClick(e, 'Pasando parametros desde un evento personalizado')}
        />
      </div>
    )
  }
}
