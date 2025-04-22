import React, { useState } from "react";

const initialValues = {
  task: "",
  taskType: "",
  status: [],
};
const SamplePage = () => {
  const [values, setValues] = useState(initialValues);
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setValues((prev) => ({ ...prev, status: [...prev.status, value] }));
      } else {
        setValues((prev) => ({
          ...prev,
          status: prev.status.filter((f) => f !== value),
        }));
      }
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    setValues(initialValues);
    setTodo((prev) => [...prev, values]);
  };
  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="task">Task</label>
        <br />
        <input
          type="text"
          id="task"
          name="task"
          value={values.task}
          placeholder="task"
          onChange={handleChange}
        />
        <br /> <br />
        <label>Task Type</label>
        <br />
        <label htmlFor="online">Online</label>
        <input
          type="radio"
          id="online"
          name="taskType"
          value="online"
          checked={values.taskType === "online"}
          onChange={handleChange}
        />
        <label htmlFor="offline">Task Type</label>
        <input
          type="radio"
          id="offline"
          name="taskType"
          value="offline"
          checked={values.taskType === "offline"}
          onChange={handleChange}
        />
        <br /> <br />
        <label>Status</label>
        <br />
        <label htmlFor="pending">Pending</label>
        <input
          type="checkbox"
          id="pending"
          name="status"
          value="pending"
          checked={values.status.includes("pending")}
          onChange={handleChange}
        />
        <label htmlFor="ongoing">Ongoing</label>
        <input
          type="checkbox"
          id="ongoing"
          name="status"
          value="ongoing"
          checked={values.status.includes("ongoing")}
          onChange={handleChange}
        />
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          id="completed"
          name="status"
          value="completed"
          checked={values.status.includes("completed")}
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>

      {todo.length > 0 &&
        todo.map((v, index) => {
          return (
            <>
              <tr key={index}>
                <td>{v.task}</td>

                <td>{v.taskType}</td>

                <td>{v.status}</td>
              </tr>
            </>
          );
        })}
    </div>
  );
};

export default SamplePage;
