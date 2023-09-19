import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

function ReplayPage() {
    const location = useLocation();
    const events = location.state.events;

    useEffect(() => {
        if (events.length > 0) {
            // eslint-disable-next-line no-undef
            const sessionReplayer  = new rrwebPlayer({
                target: document.body,
                data: {
                    events,
                }
            });
            sessionReplayer.addEventListener('finish', () => {
                console.log('finish')
            });

            return () => {
                sessionReplayer.removeEventListener('finish');
            };
        }
    }, [events]);

    return (
        <Box>
            <Typography variant="h5" sx={{mt: 1, ml: 2, fontWeight: `bold`}}>
                Replay
            </Typography>
        </Box>
    )
}

export default ReplayPage;