import React from "react";

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
