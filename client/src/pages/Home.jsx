import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Image, Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

import Thumbnail1 from "../assets/images/Thumbnail1.png";

import ViewsIcon from "../assets/icon/ViewsIcon.svg";
import DateIcon from "../assets/icon/DateIcon.svg";
import axios from "axios";

function VideoList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const results = await axios.get(`${process.env.REACT_APP_BASE_URL}/videos`);
    setData(results.data.data);
    console.log(results.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className="py-0 px-5" style={{ marginTop: "10%" }}>
        <Row lg={4}>
          {data.map((item) => {
            return (
              <Col
                className="mb-4"
                onClick={() => {
                  navigate("/videodetail/" + item.id);
                }}
              >
                <Stack direction="vertical">
                  <Image
                    src={item.thumbnail ? item.thumbnail : Thumbnail1}
                    className="mb-2"
                  />
                  <Card.Text
                    className="text-white mb-3"
                    style={{ fontSize: "15px" }}
                  >
                    {item.title}
                  </Card.Text>
                  <Card.Text className="fs-6 mb-2" style={{ color: "#555555" }}>
                    {item.channel.channelName}
                  </Card.Text>
                  <Row>
                    <Col md={4}>
                      <Stack direction="horizontal">
                        <div className="d-flex flex-column justify-content-center me-2">
                          <Image src={ViewsIcon} />
                        </div>
                        <Card.Text
                          className="fs-6"
                          style={{ color: "#555555" }}
                        >
                          {item.viewcount}
                        </Card.Text>
                      </Stack>
                    </Col>
                    <Col>
                      <Stack direction="horizontal">
                        <div className="d-flex flex-column justify-content-center me-2">
                          <Image src={DateIcon} />
                        </div>
                        <Card.Text
                          className="fs-6"
                          style={{ color: "#555555" }}
                        >
                          {item.created_at.slice(0, 10)}
                        </Card.Text>
                      </Stack>
                    </Col>
                  </Row>
                </Stack>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default VideoList;
