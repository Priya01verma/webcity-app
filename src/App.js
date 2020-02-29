import React from "react";
import "./App.css";
import Main from "./components/homepage/Main";
import { ThemeProvider } from "@material-ui/styles";
import MuiTheme from "./MuiTheme";

function App() {
    return (
        <ThemeProvider theme={MuiTheme}>
            <div className="App">
                <Main />
            </div>
        </ThemeProvider>
    );
}

export default App;
