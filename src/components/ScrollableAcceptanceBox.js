import {Box, Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";

function ScrollableAcceptanceBox({terms, lastUpdated, onAccept, onDecline}) {

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const termsContainer = document.getElementById("termsContainer");

        const handleScroll = () => {
            const isScrollbarAtBottom =
                termsContainer.scrollTop + termsContainer.clientHeight >= termsContainer.scrollHeight;

            if (isScrollbarAtBottom) {
                setIsButtonDisabled(false);
            }
        };

        termsContainer.addEventListener("scroll", handleScroll);

        return () => {
            termsContainer.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <Box
        sx={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff"
        }}
    >
        <Typography variant="h5" sx={{mt: 1, ml: 2}}>Terms of Service</Typography>
        <Typography variant="h6" sx={{ml: 2}}>Last updated {lastUpdated}</Typography>
        <Box
            id="termsContainer"
            sx={{
                height: "300px",
                mx: 1,
                overflow: "auto",
            }}
        >
            <Typography sx={{m: 1}}>{terms}</Typography>
        </Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <Button
                variant="outlined"
                color="success"
                sx={{m: 2, px: 4, py: 2}}
                onClick={onDecline}
            >Decline</Button>
            <Button
                id="acceptableButton"
                variant="contained"
                disabled={isButtonDisabled}
                sx={{m: 2, px: 4, py: 2}}
                onClick={onAccept}
            >Accept</Button>
        </Box>
    </Box>
}

export default ScrollableAcceptanceBox