import React, { useEffect, useState } from "react";
import { Container, Stack, Image, Card, Form } from "react-bootstrap";

import VideoDetail from "../../assets/images/bbqDetail.png";
import ViewsIcon from "../../assets/icon/ViewsIcon.svg";
import DateIcon from "../../assets/icon/DateIcon.svg";
import PhotoProfile from "../../assets/images/MyChannel.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function Video() {
  const { id } = useParams();

  const [data, setData] = useState({});

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/video/${id}`
    );
    setData(result.data.data);
  };

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <>
      <Container className="ps-5 pe-0 mb-4">
        <Stack direction="vertical">
          <video
            src={data.video}
            controls
            style={{ width: "695px", height: "395px" }}
          />
          <Card.Text className="fs-5 fw-bold text-white mt-3 mb-3">
            {data.title}
          </Card.Text>
          <Stack direction="horizontal" gap={4}>
            <Stack direction="horizontal">
              <div className="d-flex flex-column justify-content-center me-2">
                <Image src={ViewsIcon} />
              </div>
              <Card.Text className="fs-6" style={{ color: "#555555" }}>
                {data.viewcount}
              </Card.Text>
            </Stack>

            <Stack direction="horizontal">
              <div className="d-flex flex-column justify-content-center me-2">
                <Image src={DateIcon} />
              </div>
              <Card.Text className="fs-6" style={{ color: "#555555" }}>
                {data.crated_at?.slice(0, 10)}
              </Card.Text>
            </Stack>
          </Stack>
          <hr style={{ borderTop: "3px solid #C2C2C2" }} />
          <Stack direction="horizontal">
            <div className="d-flex flex-column justify-content-center">
              <Image
                src={PhotoProfile}
                style={{ width: "35px", height: "35px" }}
                className="w-75"
              />
            </div>

            <Form.Control
              className="py-1 fs-5"
              style={{
                borderColor: "#BCBCBC",
                borderWidth: "3px",
                backgroundColor: "#555555",
                color: "rgb(210,210,210,0.25)",
              }}
              type="text"
              placeholder="Comment"
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Video;
