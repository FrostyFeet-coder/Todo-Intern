  import React, { useState, useEffect } from "react";
  import axios from "axios";

  const TaskForm = ({ selectedTask, fetchTasks }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
      if (selectedTask) {
        setTitle(selectedTask.title);
        setDescription(selectedTask.description);
        setDueDate(selectedTask.dueDate);
      } else {
        setTitle("");
        setDescription("");
        setDueDate("");
      }
    }, [selectedTask]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const task = { title, description, dueDate };
      if (selectedTask) {
        // Update existing task
        await axios.put(
          `http://localhost:5000/api/tasks/${selectedTask._id}`,
          task
        );
      } else {
        // Create new task
        await axios.post("http://localhost:5000/api/tasks", task);
      }
      fetchTasks();
      // Reset form fields after submission
      setTitle("");
      setDescription("");
      setDueDate("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        {selectedTask ? (
          <button type="submit">Update Task</button>
        ) : (
          <button type="submit">Add Task</button>
        )}
      </form>
    );
  };

  export default TaskForm;
