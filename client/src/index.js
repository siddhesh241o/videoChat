import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App'; 
import './style.css'; 
import { ContextProvider } from './socketContext';
const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <ContextProvider>
             <App />
        </ContextProvider>
    </ThemeProvider>
);
