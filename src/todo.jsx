import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function todo() {
  let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let newAddTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let updateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo =(id)=>{
    setTodos((prevTodo) =>todos.filter((prevTodo)=>prevTodo.id != id));
  }
  
  return (
    <>
      <div className="box">
        <input
          placeholder="add new task"
          value={newTodo}
          onChange={updateNewTodo}
        ></input>
        <br></br>
        <br></br>
        <button onClick={newAddTask}>add</button>
        <br></br>
      </div>
      <hr></hr>
      <ul className="todo">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            &nbsp;
            {/* here arrow fn use to not excute the delete fn before click button */}
            <button  onClick={()=>deleteTodo(todo.id)}>delete</button>  
          </li>
        ))}
      </ul>
    </>
  );
}
