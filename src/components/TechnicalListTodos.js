import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const TechnicalListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Delete todo function
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/technical/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos/technical");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {/* <h2 className="text-center mt-5">Technical Todos</h2> */}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} behavior="technical" />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TechnicalListTodos;