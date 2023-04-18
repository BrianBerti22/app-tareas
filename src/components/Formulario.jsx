import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';

const Formulario = ({addToDo}) => {
  const [toDo, setToDo] = useState({
    title: "Tarea #01",
    description: "Description #01",
    state: "pendiente",
    priority: true
  });

 

  function handleSubmit(e) {
    e.preventDefault();
    const {title, description} = toDo;
    
    if (!title.trim() || !description.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Titulo y Descripcion obligatorios!',
      });
    } else {
      addToDo({
        id: Date.now(),
        ...toDo,
        state: toDo.state === 'completado'
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado Correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }
  

  const handlechange = (e) => {
    setToDo({
      ...toDo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div>
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="Form-control mb-2"
        name="title"
        value={toDo.title}
        onChange={handlechange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripcion"
        name="description"
        value={toDo.description}
        onChange={handlechange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={toDo.priority}
          onChange={handlechange}
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={toDo.state}
        onChange={handlechange}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
    </div>
  );
};

export default Formulario;
