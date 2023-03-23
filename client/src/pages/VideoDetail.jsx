import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import SideVideoList from "../components/detailVideo/SideVideoList"
import Video from "../components/detailVideo/Video"

function VideoDetail() {

    return (
        <Container direction="vertical" className="p-0" style={{marginTop:'10%'}}>
            <Row lg={2} className="m-0 p-0">
                <Col lg={8} className="m-0 p-0">
                    <Video />
                </Col>
                <Col lg={4} className="m-0 p-0">
                    <SideVideoList />
                </Col>
            </Row>
        </Container>
    )
}

export default VideoDetail