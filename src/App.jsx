import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ToDos from "./components/ToDos";

const initialStateToDo = JSON.parse(localStorage.getItem('ToDos'))||[];
const App = () => {
  const [toDos, setToDos] = useState(initialStateToDo);

  useEffect(()=>{
    localStorage.setItem('ToDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = toDo => {
    setToDos([...toDos, toDo])
  }

  const deleteToDo = id => {
    const newArray = toDos.filter(toDo => toDo.id !== id)
    setToDos(newArray)
  }

  const updateToDo = id => {
    const newArray = toDos.map(toDo => {
      if (toDo.id === id) {
        return {
          ...toDo,
          state: !toDo.state
        };
      }
      return toDo;
    }); 
    setToDos(newArray)
  }

  const orderToDo = arrayToDo => {
    return arrayToDo.sort((a,b)=>{
      if(a.priority === b.priority) return 0
      if(a.priority === true) return -1
      if(a.priority === false) return 1
    })
  }



  return (
    <div className="container mb-2">
      <h1 className="my-5">Tareas</h1>
      <Formulario addToDo={addToDo}/>
      <ToDos toDos={orderToDo(toDos)} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
    </div>
  );
};

export default App;
