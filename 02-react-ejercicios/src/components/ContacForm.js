import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {};

const validateForm = (form) => {};

const ContacForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,} = useForm(initialForm, validateForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required />
          <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required />
          <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required />
          <textarea
            name="comments"
            col="50"
            rows="5"
            placeholder="Escribe tus comentarios"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
            ></textarea>
            <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default ContacForm;
