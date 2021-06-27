import React, { useState, useEffect } from 'react';


export default function ScrollHooks () {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log('fase de montaje')
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => (window.removeEventListener("scroll", detectarScroll));
  }, [scrollY]);

  //Esto funciona como el component didunmount y funciona cuando solo se hace una llamada a un API
  // useEffect( () => {
  //   console.log('Fase de montaje');
  // },[]);

  //Si no tiene la lista de dependencia funciona como un component Update
  // useEffect( () => {
  //   console.log('Fase de actualizacion');
  // });

  //Si le decimos que retorne una funciona ejecuta la fase de desmontaje (listenr, contadores,  APIS)
  // useEffect( () => {
  //   console.log('Fase de desmontaje');
  //   return () => {}
  // });

  return (
    <>
      <h2>Hooks - useEffet y el ciclo de vida </h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  )
}
