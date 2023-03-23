import React from "react";
import { Container, Image, Stack, Card, Button, Row, Col } from "react-bootstrap"

import ChannelHeader from "../assets/images/ChannelHeader.png"
import CreatorPhoto from "../assets/images/User2.png"

import Thumbnail1 from "../assets/images/Thumbnail1.png"
import Thumbnail2 from "../assets/images/Thumbnail2.png"
import Thumbnail3 from "../assets/images/Thumbnail3.png"
import Thumbnail4 from "../assets/images/Thumbnail4.png"

import ViewsIcon from "../assets/icon/ViewsIcon.svg"
import DateIcon from "../assets/icon/DateIcon.svg"

function Creator() {
    return(
        <>  <div>
                <Image src={ChannelHeader} style={{height:'18vh', width:'100%', marginTop:'10%'}}/>
            </div>
            <Container className="px-5 m-0 mt-4">
                <Stack direction="horizontal" className="mb-4">
                    <Image src={CreatorPhoto} className="me-4" />
                    <Stack direction="vertical">
                        <Card.Text className="text-white fs-3 mb-0">Abang Gaming</Card.Text>
                        <Card.Text style={{color:'#F0F0F0'}}>15K Subscriber</Card.Text>
                    </Stack>
                    <Button className="py-2" style={{ backgroundColor: '#FF7A00', border: 'none', width: '15%' }}>
                        Subscribe
                    </Button>
                </Stack>
                <hr style={{borderTop:'3px solid #C2C2C2'}} />

                <Row lg={4} >
                    <Col className="mb-4">
                        <Stack direction="vertical">
                            <Image src={Thumbnail1} className="mb-2"/>
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>GIMANS KABS NYA NICH ? #qgbacotsantuy</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>qorygore</Card.Text>
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
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>MALIH, PESAN PEDAS TUK ADE LONDOK - Deddy Corbuzier ...</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>Deddy Corbuzier</Card.Text>
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
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>Keraton Yogyakarta : Ibu  Ratu & Tari Bedhaya</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>Kisah Tanah Jawa</Card.Text>
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

export default Creator