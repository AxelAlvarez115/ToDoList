import React, { useState } from "react";
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import Input from "./components/Input";
import Button from "./components/Button";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      done: false
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f2f5",
        padding: 20
      }}
    >
      <Card>
        <CardContent>
          <h1>To‑Do List</h1>

          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <Input
              placeholder="Ajouter une tâche..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <Button variant="add" onClick={addTask}>Ajouter</Button>
          </div>

          <div>
            {tasks.length === 0 && (
              <p style={{ color: "#888" }}>Aucune tâche pour le moment.</p>
            )}

            {tasks.map((task) => (
              <div
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #eee",
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 8
                }}
              >
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.done ? "line-through" : "none",
                    color: task.done ? "#888" : "#000"
                  }}
                >
                  {task.text}
                </span>

                <div>
                  <Button size="icon" onClick={() => toggleTask(task.id)}>
                    <span>✔️</span>
                  </Button>

                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => deleteTask(task.id)}
                  >
                    <span>🗑️</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
