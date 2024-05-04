// src/components/App.js
import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { TaskProvider } from '../context/TaskContext';
import { CssBaseline, Container, Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import the theme you created

function App() {
    return (
      <ThemeProvider theme={theme}>
        <TaskProvider>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" gutterBottom>
                    Task Manager
                </Typography>
                <Paper style={{ padding: '1em' }}>
                    <TaskForm />
                    <TaskList />
                </Paper>
            </Container>
        </TaskProvider>
        </ThemeProvider>
    );
}

export default App;
