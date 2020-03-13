import React from 'react';
import './App.css';
import NavBar from "./NavBar";
import Container from "@material-ui/core/Container";
import AppRouter from "./AppRouter";
import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles({
    card: {
        width: 300,
        height: 400,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        // display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: "row",
    },
    media: {
        height: 100,
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
});

function App() {
  return (
      <div>
          <NavBar/>
          <Container>
              <AppRouter/>
          </Container>
      </div>
  );
}

export default App;
