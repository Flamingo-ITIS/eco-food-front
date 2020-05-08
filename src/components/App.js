import React from 'react';
import '../App.css';
import NavBar from "./NavBar";
import Container from "@material-ui/core/Container";
import AppRouter from "./AppRouter";
import {createMuiTheme} from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

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

const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <AlertProvider template={AlertTemplate} {...options}>
                <Container fixed style={{padding: 0}}>
                    <AppRouter/>
                </Container>
            </AlertProvider>
        </ThemeProvider>
    );
}

export default App;
