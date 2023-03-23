import React from "react";
import { Container, Row, Col, Stack, Image, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import Thumbnail1 from "../assets/images/Thumbnail1.png"
import Thumbnail2 from "../assets/images/Thumbnail2.png"
import Thumbnail3 from "../assets/images/Thumbnail3.png"
import Thumbnail4 from "../assets/images/Thumbnail4.png"
import Thumbnail5 from "../assets/images/Thumbnail5.png"
import Thumbnail6 from "../assets/images/Thumbnail6.png"
import Thumbnail7 from "../assets/images/Thumbnail7.png"
import Thumbnail8 from "../assets/images/Thumbnail8.png"

import ViewsIcon from "../assets/icon/ViewsIcon.svg"
import DateIcon from "../assets/icon/DateIcon.svg"

function VideoList() {

    const navigate = useNavigate()

    return(
        <>
            <Container className="py-0 px-5" style={{marginTop:'10%'}}>
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
                            <Image src={Thumbnail4} className="btn mb-2 p-0" onClick={() => navigate("/detailvideo")}/>
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

                    <Col>
                        <Stack direction="vertical">
                            <Image src={Thumbnail5} className="mb-2"/>
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
                            <Image src={Thumbnail6} className="mb-2"/>
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
                            <Image src={Thumbnail7} className="mb-2"/>
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
                            <Image src={Thumbnail8} className="mb-2"/>
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

export default VideoList