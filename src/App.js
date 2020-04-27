import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import AppRouter from "./AppRouter";
import {makeStyles} from "@material-ui/styles";
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

export const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        margin: '10px'
    },
    card: {
        width: 250,
        height: 400,
        margin: "20px",
        padding: "5px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    media: {
        height: 150,
        width: 250,
        margin: "0 auto"
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white"
    },
    ulWrap: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "10px",
    }
});



function App() {
    // const express = require('express');
    // const cors = require('cors');
    // const app = express();
    //
    // app.use(cors());

    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container fixed >
                <AppRouter/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
