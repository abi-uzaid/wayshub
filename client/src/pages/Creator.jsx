import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Stack,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import ChannelHeader from "../assets/images/ChannelHeader.png";
import CreatorPhoto from "../assets/images/User2.png";

import Thumbnail1 from "../assets/images/Thumbnail1.png";
import Thumbnail2 from "../assets/images/Thumbnail2.png";
import Thumbnail3 from "../assets/images/Thumbnail3.png";
import Thumbnail4 from "../assets/images/Thumbnail4.png";

import ViewsIcon from "../assets/icon/ViewsIcon.svg";
import DateIcon from "../assets/icon/DateIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Creator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    channelName: "",
    cover: "",
    photo: "",
    description: "",
    videos: [],
  });

  const getProfile = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/channel/${id}`
      );
      setData({
        channelName: result.data.data.channelName,
        cover: result.data.data.cover,
        photo: result.data.data.photo,
        description: result.data.data.description,
        videos: result.data.data.videos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {" "}
      <div>
        <Image
          src={data.cover ? data.cover : ChannelHeader}
          style={{ height: "18vh", width: "100%", marginTop: "10%" }}
        />
      </div>
      <Container className="px-5 m-0 mt-4">
        <Stack direction="horizontal" className="mb-4">
          <Image
            src={data.photo ? data.photo : CreatorPhoto}
            className="me-4"
            style={{ height: "95px", width: "80px" }}
          />
          <Stack direction="vertical">
            <Card.Text className="text-white fs-3 mb-0">
              {data.channelName}
            </Card.Text>
            <Card.Text style={{ color: "#F0F0F0" }}>15K Subscriber</Card.Text>
          </Stack>
          <Button
            className="py-2"
            style={{ backgroundColor: "#FF7A00", border: "none", width: "15%" }}
          >
            Subscribe
          </Button>
        </Stack>
        <hr style={{ borderTop: "3px solid #C2C2C2" }} />

        <Row lg={4}>
          {data.videos.map((item) => (
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
                  {item.channelName}
                </Card.Text>
                <Row>
                  <Col md={4}>
                    <Stack direction="horizontal">
                      <div className="d-flex flex-column justify-content-center me-2">
                        <Image src={ViewsIcon} />
                      </div>
                      <Card.Text className="fs-6" style={{ color: "#555555" }}>
                        {item.viewcount}
                      </Card.Text>
                    </Stack>
                  </Col>
                  <Col>
                    <Stack direction="horizontal">
                      <div className="d-flex flex-column justify-content-center me-2">
                        <Image src={DateIcon} />
                      </div>
                      <Card.Text className="fs-6" style={{ color: "#555555" }}>
                        {item.created_at.slice(0, 10)}
                      </Card.Text>
                    </Stack>
                  </Col>
                </Row>
              </Stack>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Creator;
