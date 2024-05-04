// src/components/TaskList.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';
import { List } from '@mui/material';

export default function TaskList() {
    const { tasks } = useContext(TaskContext);

    return (
        <List>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </List>
    );
}
