import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
