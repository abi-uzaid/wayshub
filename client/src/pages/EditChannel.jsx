import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Card,
  Button,
  Stack,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import UploadVideoIcon from "../assets/images/UploadImgIcon.png";

function EditChannel() {
  const navigate = useNavigate();
  const [channelName, setChannelName] = useState("");
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const body = new FormData();
      body.append("channelName", channelName);
      body.append("photo", photo);
      body.append("description", description);
      body.append("cover", cover);

      const result = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/channel`,
        body
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/mychannel");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <Container className="py-0 px-5" style={{ marginTop: "10%" }}>
        <Row>
          <Col className="mb-4">
            <Form onSubmit={submitHandler}>
              <Form.Label className="text-white fs-4 fw-bold mb-4">
                Edit Channel
              </Form.Label>

              <Stack direction="horizontal">
                <Form.Label className="me-auto w-100">
                  <Form.Control
                    className="mb-3 py-1 fs-5"
                    style={{
                      borderColor: "#BCBCBC",
                      borderWidth: "3px",
                      backgroundColor: "#555555",
                      color: "rgb(210,210,210,0.25)",
                    }}
                    type="text"
                    placeholder="Channel Name"
                    onChange={(e) => {
                      setChannelName(e.target.name);
                    }}
                  />
                </Form.Label>

                <Form.Label
                  className="ms-3 px-2 py-1 mb-4 text-secondary fw-normal rounded-2"
                  style={{
                    width: "30%",
                    border: "solid",
                    borderWidth: "3px",
                    borderColor: "#BCBCBC",
                    backgroundColor: "#555555",
                    color: "rgb(210,210,210,0.25)",
                    cursor: "pointer",
                  }}
                >
                  <Stack direction="horizontal">
                    <Card.Text className="d-flex flex-column justify-content-center m-0 fs-5">
                      Upload Cover
                    </Card.Text>
                    <Image src={UploadVideoIcon} className="ms-auto" />
                  </Stack>
                  <Form.Control
                    onChange={(e) => {
                      setCover(e.target.files[0]);
                    }}
                    type="file"
                    style={{ width: "100%" }}
                    hidden
                  />
                </Form.Label>
              </Stack>

              <Form.Label className="me-auto w-100">
                <Form.Control
                  className="mb-3 py-1 fs-5"
                  style={{
                    borderColor: "#BCBCBC",
                    borderWidth: "3px",
                    backgroundColor: "#555555",
                    color: "rgb(210,210,210,0.25)",
                  }}
                  as="textarea"
                  rows="6"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Label>

              <Form.Label
                className="px-2 py-1 mb-4 text-secondary fw-normal rounded-2"
                style={{
                  width: "20%",
                  border: "solid",
                  borderWidth: "3px",
                  borderColor: "#BCBCBC",
                  backgroundColor: "#555555",
                  color: "rgb(210,210,210,0.25)",
                  cursor: "pointer",
                }}
              >
                <Stack direction="horizontal">
                  <Card.Text className="d-flex flex-column justify-content-center m-0 fs-5">
                    Upload Photo
                  </Card.Text>
                  <Image src={UploadVideoIcon} className="ms-auto" />
                </Stack>
                <Form.Control
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                  }}
                  type="file"
                  style={{ width: "100%" }}
                  hidden
                />
              </Form.Label>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#FF7A00", border: "none" }}
                className="py-2 fw-bold fs-5 w-100 text-white"
              >
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditChannel;
