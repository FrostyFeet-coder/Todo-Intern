import React, { useState } from "react";
import axios from "axios";
import TaskForm from "./Taskform";

const TaskList = ({ tasks, fetchTasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const updateTaskStatus = async (id, updates) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, updates);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const selectTaskForEdit = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <p>{new Date(task.dueDate).toLocaleDateString()}</p>
            <button
              onClick={() =>
                updateTaskStatus(task._id, { status: "completed" })
              }
            >
              Complete
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
            <button onClick={() => selectTaskForEdit(task)}>Edit</button>
          </li>
        ))}
      </ul>
      <TaskForm selectedTask={selectedTask} fetchTasks={fetchTasks} />
    </div>
  );
};

export default TaskList;
