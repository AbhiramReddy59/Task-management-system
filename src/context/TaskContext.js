// src/context/TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const deleteTask = taskId => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
