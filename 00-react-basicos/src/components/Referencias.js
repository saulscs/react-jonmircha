import React, { useRef } from "react";

export default function Referencias() {
  let refMenu = useRef(),
    refMenuBtn = useRef();

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.texContent === "Menu") {
      refMenuBtn.current.texContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.texContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2 className="title">Referencias</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#"> Seccion 1</a>
        <br />
        <a href="#"> Seccion 2</a>
        <br />
        <a href="#"> Seccion 3</a>
        <br />
        <a href="#"> Seccion 4</a>
        <br />
        <a href="#"> Seccion 5</a>
      </nav>
    </>
  );
}
