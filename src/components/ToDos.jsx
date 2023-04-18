import ToDo from "./Todo";

const ToDos = ({toDos, deleteToDo, updateToDo}) => {
    return(
        <div className="mt-5">
            <h2 className="text-center">Tareas</h2>
            <ul className="list-group">
                {
                    toDos.map(toDo=>(
                        <ToDo key={toDo.id} toDo={toDo} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
                    ))
                }
                {
                    toDos.length === 0 && (<li className="list-group-item text-center">sin Tareas</li>)
                }
            </ul>
        </div>

    );
};
export default ToDos;