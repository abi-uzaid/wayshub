import React, { useEffect, useState } from "react";
import { Stack, Image, Col, Row, Card } from "react-bootstrap";

import Thumbnail1 from "../../assets/images/Thumbnail1.png";
import Thumbnail2 from "../../assets/images/Thumbnail2.png";
import Thumbnail3 from "../../assets/images/Thumbnail3.png";

import ViewsIcon from "../../assets/icon/ViewsIcon.svg";
import DateIcon from "../../assets/icon/DateIcon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SideVideoList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const results = await axios.get(`${process.env.REACT_APP_BASE_URL}/videos`);
    setData(results.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Stack direction="Vertical" gap={4} className="ps-3 pe-5 mb-3">
        {data.slice(0, 3).map((item) => (
          <Stack
            direction="vertical"
            onClick={() => {
              navigate("/videodetail/" + item.id);
            }}
          >
            <Image src={item.thumbnail} className="mb-2" />
            <Card.Text className="text-white mb-3" style={{ fontSize: "15px" }}>
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
        ))}
      </Stack>
    </>
  );
}

export default SideVideoList;
