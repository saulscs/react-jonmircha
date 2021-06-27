import React, { useState } from "react";

// export default function Formularios(){
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   }
//   return (
//     <>
//       <h2 className="title">Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Nombre: </label>
//         <input
//           type="text"
//           id ="nombre"
//           name="nombre"
//           defaultValue={nombre}
//           onChange = {(e) => setNombre(e.target.value)}/>
//           <p>Elige tu sabor JS favorito</p>
//           <input
//             type="radio"
//             id="vanilla"
//             name="sabor"
//             value="vanilla"
//             defaultChecked
//             onChange={(e) => setSabor(e.target.value)}/>
//           <label htmlFor="">Vanilla</label>
//           <input
//             type="radio"
//             id="React"
//             name="sabor"
//             value="React"
//             onChange={(e) => setSabor(e.target.value)}/>
//           <label htmlFor="">React</label>
//           <input
//             type="radio"
//             id="Angular"
//             name="sabor"
//             value="Angular"
//             onChange={(e) => setSabor(e.target.value)}/>
//           <label htmlFor="">Angular</label>
//           <select
//             name="lenguaje"
//             onChange={(e) => setLenguaje(e.target.value)}
//             defaultValue="">
//             <option value="" defaultValue>---</option>
//             <option value="js">Javascript</option>
//             <option value="php">PHP</option>
//             <option value="python">Python</option>
//             <br />
//           </select>
//             <label htmlFor="terminos">Acepto terminos y condiciones</label>
//             <input
//               type = "checkbox"
//               id="terminos"
//               name="terminos"
//               onChange={(e) => setTerminos(e.target.checked)}
//               />
//             <br />
//             <input type="submit" />
//       </form>
//     </>
//   )
// }

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2 className="title">Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor="">Vanilla</label>
        <input
          type="radio"
          id="React"
          name="sabor"
          value="React"
          onChange={handleChange}
        />
        <label htmlFor="">React</label>
        <input
          type="radio"
          id="Angular"
          name="sabor"
          value="Angular"
          onChange={handleChange}
        />
        <label htmlFor="">Angular</label>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="" defaultValue>
            ---
          </option>
          <option value="js">Javascript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <br />
        </select>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
