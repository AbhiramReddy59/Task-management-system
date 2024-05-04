// src/components/TaskForm.js
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Button, TextField } from '@mui/material';

export default function TaskForm() {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        addTask({ title });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="New Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                fullWidth
            />
            <Button type="submit" color="primary" variant="contained" style={{ marginTop: 10 }}>
                Add Task
            </Button>
        </form>
    );
}
