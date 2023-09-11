import {Box, Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";

function ScrollableAcceptanceBox({terms, lastUpdated, onAcceptClick}) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isAccepted, setIsAccepted] = useState(false);

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

    const handleAcceptClick = () => {
        onAcceptClick();
        setIsAccepted(true);
    };

    return <Box
        sx={{
            width: "500px",
            display: isAccepted ? "none" : "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            p: 2
        }}
    >
        <Typography variant="h5" sx={{mt: 1, ml: 2, fontWeight: `bold`}}>Terms of Service</Typography>
        <Typography variant="h6" sx={{ml: 2, color: `#808080`}}>Last updated {lastUpdated}</Typography>
        <Box
            id="termsContainer"
            sx={{
                height: "400px",
                mx: 1,
                overflow: "auto",
                pt: 2
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
                size="large"
                variant="outlined"
                color="success"
                sx={{m: 2, px: 6, py: 2, fontWeight: `bold`, color: `#33b249`, borderColor: `33b249`}}
            >Decline</Button>
            <Button
                size="large"
                id="acceptableButton"
                variant="contained"
                disabled={isButtonDisabled}
                sx={{
                    m: 2, px: 6, py: 2, fontWeight: `bold`, backgroundColor: `#33b249`,
                    ":hover": {backgroundColor: "#33b249"}
                }}
                onClick={handleAcceptClick}
            >Accept</Button>
        </Box>
    </Box>
}

export default ScrollableAcceptanceBox