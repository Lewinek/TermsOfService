import React, { useEffect, useRef } from 'react';
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function ReplayPage() {
    const location = useLocation();
    const events = location.state.events;
    const sessionReplayer = useRef(null);

    console.log('replay page');

    useEffect(() => {
        if (!sessionReplayer.current && events.length > 0) {
            // eslint-disable-next-line no-undef
            sessionReplayer.current = new rrwebPlayer({
                target: document.body,
                data: {
                    events,
                }
            });

            sessionReplayer.current.addEventListener('finish', () => {
                console.log('finish');
            });

            return () => {
                if (sessionReplayer.current) {
                    sessionReplayer.current.pause();
                    sessionReplayer.current = null;
                }
            };
        }
    }, []);

    return (
        <Box>
            <Typography variant="h5" sx={{ mt: 1, ml: 2, fontWeight: `bold` }}>
                Replay
            </Typography>
        </Box>
    )
}

export default ReplayPage;
