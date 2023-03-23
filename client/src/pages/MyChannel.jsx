import React from "react";
import { Container, Row, Col, Image, Card, Stack, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import ChannelHeader from "../assets/images/ChannelHeader.png"
import CreatorPhoto from "../assets/images//MyChannel.png"

import Thumbnail1 from "../assets/images//bbq1.png"
import Thumbnail2 from "../assets/images//bbq2.png"
import Thumbnail3 from "../assets/images//bbq3.png"
import Thumbnail4 from "../assets/images//bbq4.png"

import ViewsIcon from "../assets/icon/ViewsIcon.svg"
import DateIcon from "../assets/icon/DateIcon.svg"

function MyChannel() {

    const navigate = useNavigate()

    return(
        <>
            <Image src={ChannelHeader} style={{height:'18vh', width:'100%', marginTop:'10%'}}/>
            <Container className="px-5 mt-4">
                <Stack direction="horizontal" className="mb-1">
                    <Image src={CreatorPhoto} className="me-4" />
                    <Stack direction="vertical">
                        <Card.Text className="text-white fs-3 mb-0">BBQ Mountain Boys</Card.Text>
                        <Card.Text style={{color:'#F0F0F0'}}>120K Subscriber</Card.Text>
                    </Stack>
                    <Button onClick={() => navigate('/editchannel')} className="py-2" style={{ backgroundColor: '#FF7A00', border: 'none', width: '15%' }}>
                        Edit Channel
                    </Button>
                </Stack>
                <Stack direction="horizontal" gap={5}>
                    <div>
                        <Card.Text className="text-white btn p-0 m-0">Video</Card.Text>
                    </div>
                    <div>
                        <Card.Text className="text-white btn p-0 m-0">Channel Description</Card.Text>
                    </div>
                </Stack>
                <hr style={{borderTop:'3px solid #C2C2C2', marginTop:'0'}} />

                <Row lg={4} >
                    <Col className="mb-1">
                        <Stack direction="vertical">
                            <Image src={Thumbnail1} className="mb-2"/>
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>Go Outside and Make Aeropress Coffee</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>BBQ Mountain Boys</Card.Text>
                            <Row>
                                <Col md={4}>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={ViewsIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>284K</Card.Text>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={DateIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>06 Sep 2020</Card.Text>
                                    </Stack>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>

                    <Col>
                        <Stack direction="vertical">
                            <Image src={Thumbnail2} className="mb-2"/>
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>Dirumah menanam episode 1 : Tauge</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>BBQ Mountain Boys</Card.Text>
                            <Row>
                                <Col md={4}>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={ViewsIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>284K</Card.Text>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={DateIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>06 Sep 2020</Card.Text>
                                    </Stack>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>

                    <Col>
                        <Stack direction="vertical">
                            <Image src={Thumbnail3} className="mb-2"/>
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>Go Outside and Make French Coffee</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>BBQ Mountain Boys</Card.Text>
                            <Row>
                                <Col md={4}>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={ViewsIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>284K</Card.Text>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={DateIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>06 Sep 2020</Card.Text>
                                    </Stack>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>

                    <Col>
                        <Stack direction="vertical">
                            <Image src={Thumbnail4} className="mb-2"/>
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>BBQ Montain Boys Episode 5 : A Day in The Life of Farmer</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>BBQ Montain Boys</Card.Text>
                            <Row>
                                <Col md={4}>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={ViewsIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>284K</Card.Text>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={DateIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>06 Sep 2020</Card.Text>
                                    </Stack>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyChannel