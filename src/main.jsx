import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Main background
      paper: '#1E1E1E', // Card background
    },
    primary: {
      main: '#3B82F6', // Blue for primary buttons
    },
    secondary: {
      main: '#2D2D2D', // Secondary button background
    },
    text: {
      primary: '#FFFFFF', // Main text color
      secondary: '#B3B3B3', // Muted text color
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E', // Apply custom background to cards
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Keep button text normal case
        },
      },
    },
  },
});


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
