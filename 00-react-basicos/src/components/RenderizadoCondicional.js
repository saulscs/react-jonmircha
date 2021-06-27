import React from "react";

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sesion: true,
    };
  }
  render() {
    return (
      <div>
        <h2 className="title">Renderizado condicional</h2>
        {this.state.sesion ? <Login /> : <Logout />}
      </div>
    );
  }
}
