import React from 'react';
import {Box, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

function ReplayPage() {
    const location = useLocation();
    const events = location.state.events;

    //eslint-disable-next-line no-undef
    const component = new rrwebPlayer({
        target: document.body,
        data: {
            events,
        },
    });
    component.addEventListener('finish', () => console.log('finish'));

    return (
        <Box>
            <Typography variant="h5" sx={{mt: 1, ml: 2, fontWeight: `bold`}}>Replay</Typography>
        </Box>
    )
}

export default ReplayPage;