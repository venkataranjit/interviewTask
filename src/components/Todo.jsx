import React, { useEffect, useState } from "react";

const data = [
  { task: "First", status: "Pending", id: 1 },
  { task: "Second", status: "Success", id: 2 },
  { task: "Third", status: "Pending", id: 3 },
  { task: "Fourth", status: "Success", id: 4 },
];
const initailValues = {
  task: "",
  status: "",
};
const Todo = () => {
  const [inputValues, setInputValues] = useState(initailValues);
  const [todos, setTodos] = useState(data);
  const [isEdited, setIsEdited] = useState(false);
  const [editId, setEditId] = useState("");
  const [msg, setMsg] = useState("");
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValues.task !== "" && inputValues.status !== "") {
      if (isEdited) {
        // todos[editId] = {
        //   ...todos[editId],
        //   task: inputValues.task,
        //   status: inputValues.status,
        // };
        const updatedTodos = [...todos];
        updatedTodos[editId] = {
          ...updatedTodos[editId],
          task: inputValues.task,
          status: inputValues.status,
        };
        setTodos(updatedTodos);
        setIsEdited(false);
        setEditId("");
        setMsg("Task Updated Succesfully");
      } else {
        setTodos([
          ...todos,
          {
            task: inputValues.task,
            status: inputValues.status,
            id: todos.length + 1,
          },
        ]);
        setMsg("Task Added Succesfully");
      }
      setInputValues(initailValues);
    } else {
      setMsg("Fill the Feilds");
    }
  };
  const editHandler = (id) => {
    const selectedId = todos.findIndex((t) => t.id === id);
    setEditId(selectedId);
    setIsEdited(true);
    const selectedTodo = todos[selectedId];
    setInputValues(selectedTodo);
  };
  const deleteHandler = (id) => {
    const deletedTodo = todos.filter((t) => t.id !== id);
    setTodos(deletedTodo);
    setMsg("Todo Deleted");
  };
  useEffect(() => {
    const m = setTimeout(() => {
      setMsg("");
    }, 3000);

    return () => clearTimeout(m);
  }, [msg]);
  return (
    <>
      <h2>Todo</h2>
      <form>
        <input
          type="text"
          value={inputValues.task}
          name="task"
          placeholder="Task"
          onChange={inputHandler}
        />
        <select
          name="status"
          value={inputValues.status}
          onChange={inputHandler}
        >
          <option value="" disabled selected>
            Select Status
          </option>
          <option value="Pending">Pending</option>
          <option value="Success">Success</option>
        </select>
        <button onClick={submitHandler}>
          {isEdited ? "Edit Task" : "Add Task"}
        </button>
      </form>
      <br />
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            {/* {Object.keys(todos[0])
              .filter((key) => key !== "id")
              .map((t) => (
                <th key={t}>{t}</th>
              ))} */}
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((t) => {
              return (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.task}</td>
                  <td>{t.status}</td>
                  <td>
                    <a href="#" onClick={() => editHandler(t.id)}>
                      Edit
                    </a>
                  </td>
                  <td>
                    <a href="#" onClick={() => deleteHandler(t.id)}>
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>"There are no Tasks"</td>
            </tr>
          )}
        </tbody>
      </table>
      <p>{msg}</p>
    </>
  );
};

export default Todo;
