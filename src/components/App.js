import React from 'react';
import '../App.css';
import NavBar from "./NavBar";
import Container from "@material-ui/core/Container";
import AppRouter from "./AppRouter";
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#E9AA39',
            light: '#F9E0B5',
        },
        secondary: {
            main: '#699819',
            light: '#D3F59B',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container fixed style={{padding: 0}}>
                <AppRouter/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
