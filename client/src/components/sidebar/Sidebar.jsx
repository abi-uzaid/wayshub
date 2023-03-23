import React from "react";
import { Container, Stack, Image, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import WaysHubIcon from "../../assets/images/WaysHubIcon.png"
import HomeIcon from "../../assets/icon/HomeIcon.svg"
import SubscriptionIcon from "../../assets/icon/SubscriptionIcon.svg"

import UserIcon1 from "../../assets/images/UserIcon1.png"
import UserIcon2 from "../../assets/images/UserIcon2.png"
import UserIcon3 from "../../assets/images/UserIcon3.png"

function Sidebar() {

    const navigate = useNavigate()

    return(
        <>
            <Container className="p-5 m-0" style={{height:'100vh', width:'25%', backgroundColor:'#161616', position:'fixed'}}>
                <Stack direction="vertical" >
                    <div className="ms-4 mb-5">
                    <Image src={WaysHubIcon} className="w-50 mb-4 ms-5" />
                    </div>
                    <Stack direction="horizontal" className="mb-4 btn ps-0" onClick={() => navigate("/")}>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={HomeIcon} />
                        </div>
                        <Card.Text className="text-white">Home</Card.Text>
                    </Stack>

                    <Stack direction="horizontal" className="mb-5 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={SubscriptionIcon} />
                        </div>
                        <Card.Text className="text-white">Subscription</Card.Text>
                    </Stack>

                    <Card.Text className="text-white fs-4">Channel</Card.Text>

                    <Stack direction="horizontal" className="mb-3 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={UserIcon1} />
                        </div>
                        <Card.Text className="text-white">Nona Cantik</Card.Text>
                    </Stack>

                    <Stack direction="horizontal" className="mb-3 btn ps-0" onClick={() => navigate("/creator")}>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={UserIcon2} />
                        </div>
                        <Card.Text className="text-white">Abang Gaming</Card.Text>
                    </Stack>

                    <Stack direction="horizontal" className="mb-3 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={UserIcon3} />
                        </div>
                        <Card.Text className="text-white">Mang Koding</Card.Text>
                    </Stack>

                    <Card.Text className="text-white fs-6 text-center">Show More</Card.Text>
                </Stack>
            </Container>
        </>
    )
}

export default Sidebar