import React, { useEffect, useRef } from 'react';
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function ReplayPage() {
    const location = useLocation();
    const events = location.state.events;
    const sessionPlayer = useRef(null);

    useEffect(() => {
        if (!sessionPlayer.current && events.length > 0) {
            if (typeof rrwebPlayer !== 'undefined') {
                // eslint-disable-next-line no-undef
                sessionPlayer.current = new rrwebPlayer({
                    target: document.body,
                    data: {
                        events,
                    }
                });
                sessionPlayer.current.addEventListener('finish', () => {
                    console.log('finish');
                });
                return () => {
                    if (sessionPlayer.current) {
                        sessionPlayer.current.pause();
                        sessionPlayer.current = null;
                    }
                };
            } else {
                console.error('rrwebPlayer is not defined. Make sure it is imported and available.');
            }
        }
    }, [events]);

    return (
        <Box>
            <Typography variant="h5" sx={{ mt: 1, ml: 2, fontWeight: 'bold' }}>
                Replay
            </Typography>
        </Box>
    )
}

export default ReplayPage;