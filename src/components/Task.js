// src/components/Task.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <ListItem>
            <ListItemText primary={task.title} />
            <IconButton onClick={() => deleteTask(task.id)} edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
}
