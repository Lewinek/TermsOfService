import './App.css';
import * as React from 'react';
import ScrollableAcceptanceBox from "./components/ScrollableAcceptanceBox";
import {Box} from "@mui/material";

function App() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#a3ada6"
            }}
        >
            <ScrollableAcceptanceBox></ScrollableAcceptanceBox>
        </Box>
    )
}


export default App;
