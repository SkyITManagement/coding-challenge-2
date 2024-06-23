"use client";
import React, { useState, useEffect } from "react";

/**
 * Coding Challenge: Create a To-Do List Component
 *
 * Instructions:
 * 1. Use the `useState` hook to manage the state of the to-do list and individual tasks.
 * 2. Use the `useEffect` hook to log a message to the console whenever the list of tasks changes.
 * 3. Create functionality to add new tasks.
 * 5. Create functionality to mark tasks as completed
 *
 * Requirements:
 * - Display the current list of tasks.
 * - Log a message to the console each time the list of tasks changes.
 * - Allow users to add and mark tasks as completed.
 * - Completed tasks should be removed from the list of tasks
 *
 * Hint: Refer to React's official documentation for details on `useState` and `useEffect`.
 */

const TodoList: React.FC = () => {
  // Create task list and manage state
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  // Log a message to the console each time the list of tasks changes
  useEffect(() => {}, []);

  // Add functionality to add new tasks
  const addTask = () => {};

  // Add functionality to mark tasks as completed
  const toggleComplete = () => {};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">To-Do List</h1>
      <div className="bg-white p-4 shadow-md rounded w-full max-w-md">
        {/* Display the current list of tasks here */}
      </div>
    </div>
  );
};

export default TodoList;
