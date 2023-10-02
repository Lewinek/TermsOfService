import React from 'react';
import {Box} from "@mui/material";
import ScrollableAcceptanceBox from "./ScrollableAcceptanceBox";
import {useNavigate} from 'react-router-dom';
import {EventType} from "rrweb";

function TermsPage() {
    let events = [];
    const navigate = useNavigate();

    // eslint-disable-next-line no-undef
    rrweb.record({
        emit(event) {
            events.push(event)
            console.log(event)
            if (event.type === EventType.Custom) {
                console.log('Niestandardowe zdarzenie zostało dodane:', event);
            }
        }
    })

    const handleAcceptClick = () => {
        const currentDate = new Date();

        const customEvent = {
            eventType: EventType.Custom,
            timestamp: currentDate.toISOString(),
            data: {
                message: 'Kliknięto przycisk o akceptacji',
            },
        }

        // eslint-disable-next-line no-undef
        rrweb.record.addCustomEvent(customEvent.eventType, customEvent);

        console.log("before nav")
        navigate('/replay', {state: {events}});
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D4D9DB"
            }}
        >
            <ScrollableAcceptanceBox
                lastUpdated="August 2023"
                terms="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis, metus a finibus elementum,
                ligula ex convallis leo, non rutrum lacus odio in purus. Phasellus quis justo efficitur, aliquam massa
                sit amet, accumsan lectus. Nam ac ante mollis, mattis arcu ut, consectetur nunc. Morbi nec commodo odio.
                Vestibulum eu pretium lacus. Sed posuere ipsum dolor, non efficitur nisl cursus et. Sed tortor risus,
                viverra eget ultricies ut, convallis dapibus neque. Duis fermentum mauris at arcu porta suscipit a
                viverra urna. Nullam malesuada libero et elit blandit rutrum at in nisl. Suspendisse at leo suscipit,
                dictum ex quis, fringilla lectus.

                Donec venenatis lacus eget euismod ullamcorper. Etiam mi justo, semper sed euismod et, bibendum ac
                nulla. Fusce maximus placerat tortor, vitae venenatis orci scelerisque non. Praesent mattis efficitur
                molestie. In placerat ipsum porta ornare malesuada. Donec sed ornare nisl, at ultrices mauris. Fusce
                tempor auctor ex, quis blandit metus dignissim at. Nulla quis tellus nibh. Maecenas nec erat pulvinar,
                cursus sapien a, porta augue. Cras eget justo justo. Vivamus blandit ut massa eu mattis.

                Vestibulum porttitor, dolor varius tincidunt vulputate, libero sem scelerisque ex, pellentesque viverra
                metus leo in lectus. Curabitur lacinia, lectus eget euismod mattis, elit elit egestas ante, nec
                convallis diam elit et augue. Aenean porttitor ornare nisl. Curabitur nec lectus dignissim, dapibus
                metus id, pretium justo. Phasellus tincidunt tellus mauris, imperdiet porta diam lobortis at. In non
                purus mauris. Vestibulum consectetur sapien ac ligula porttitor, a posuere quam porttitor. Pellentesque
                imperdiet, urna id feugiat blandit, neque magna rutrum nisl, a ultricies tellus augue quis sem. Integer
                pellentesque tellus non erat interdum mattis. Proin in volutpat neque, nec eleifend risus. Ut vulputate,
                leo at facilisis efficitur, sem orci viverra tortor, nec aliquet leo lorem quis velit. In egestas
                accumsan mauris vel volutpat. Sed felis nibh, accumsan ut dolor sed, maximus cursus mi. In scelerisque
                vel nibh sed varius.

                Proin placerat enim non est lacinia ornare. Aenean vulputate dictum ullamcorper. Donec posuere neque
                metus, et convallis velit consectetur nec. Quisque ut ante a nulla dignissim venenatis. Praesent nec
                semper dui, ut iaculis nisl. Curabitur lacinia sollicitudin massa a posuere. Donec eget mauris lacus.
                Nulla quis augue et sapien consequat consectetur sit amet non felis. Integer eget felis massa.
                Vestibulum sit amet viverra quam. Vestibulum imperdiet ante libero, in dapibus magna rhoncus a. Nam
                euismod felis sed diam consectetur vulputate. Aliquam ut facilisis urna, eget rhoncus purus. Praesent
                mauris nisl, mattis a nibh id, rhoncus faucibus magna. Nullam in dapibus lorem, imperdiet aliquam est.

                Donec sollicitudin tortor ac viverra mattis. Donec egestas mauris eget enim faucibus maximus. Quisque
                vitae diam nec orci dictum molestie. Cras sit amet pellentesque massa. Maecenas a nisl orci. Aliquam
                malesuada nunc nec mi placerat, vel pulvinar ligula dignissim. Nulla quis nulla turpis. Aenean mattis
                semper orci, sit amet euismod lacus porta et."
                onAcceptClick={handleAcceptClick}
            >
            </ScrollableAcceptanceBox>
        </Box>
    )
}

export default TermsPage;