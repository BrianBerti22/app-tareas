import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const data = new FormData(form.current);

    //console.log(...data.entries())

    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    //validar datos

    if (!title.trim() || !description.trim() || !state.trim())
      return setError("llena todos los campos");

    console.log(title, description, state);
  }
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="Form-control mb-2"
        name="title"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripcion"
        name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Procesar
      </button>

      {error !== "" && error}
    </form>
  );
};

export default NoControlado;
