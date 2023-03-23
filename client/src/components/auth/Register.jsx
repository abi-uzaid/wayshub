import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import WaysHub from "../../assets/images/WaysHub.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { API } from "../../config/api";
import Swal from "sweetalert2";


const Register = (props) => {
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
});

const { email, password } = form;

const handleSubmit = useMutation(async (e) => {
  try {
    e.preventDefault();

    // Configuration Content-type
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    // Data body
    const body = JSON.stringify(form);

    // Insert data user to database
    const response = await API.post("/register", body, config);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1500,
    });

    setForm({
      name: "",
      email: "",
      password: "",
    });

    // Handling response here
  } catch (error) {
  //   const alert = (
  //     <Alert variant="danger" className="py-1">
  //       Failed
  //     </Alert>
  //   );
  //   setMessage(alert);
  //   console.log(error);
  // }
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Failed",
    showConfirmButton: false,
    timer: 1500,
  });
}
});


  const navigate = useNavigate();

  return (
    <>
      <Container className="p-3 mt-4" style={{ height: "100vh" }}>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <Stack
              direction="vertical"
              className="d-flex flex-column justify-content-center"
            >
              <Image className="w-75" src={WaysHub} />
              <Card.Text className="text-white fs-5 fw-light w-75">
                Join now, share your creations with another people and enjoy
                other creations
              </Card.Text>
              <Button
                onClick={() => navigate("/login")}
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#FF7A00",
                  border: "none",
                  width: "30%",
                }}
                className="mt-5 py-2 fw-bold fs-5 text-white"
              >
                Sign In
              </Button>
            </Stack>
          </Col>
          <Col>
            <Container
              className="rounded-4 p-5"
              style={{ backgroundColor: "#161616", width: "80%" }}
            >
              <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                <Form.Label className="fs-1 mb-5 fw-bold text-white">
                  Sign Up
                </Form.Label>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    className="mb-4 py-2 fs-5"
                    style={{
                      borderColor: "#BCBCBC",
                      borderWidth: "3px",
                      backgroundColor: "#555555",
                      color: "rgb(210,210,210,0.25)",
                    }}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Control
                    className="py-2 fs-5"
                    style={{
                      borderColor: "#BCBCBC",
                      borderWidth: "3px",
                      backgroundColor: "#555555",
                      color: "rgb(210,210,210,0.25)",
                    }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formChannelName">
                  <Form.Control
                    className="py-2 fs-5"
                    style={{
                      borderColor: "#BCBCBC",
                      borderWidth: "3px",
                      backgroundColor: "#555555",
                      color: "rgb(210,210,210,0.25)",
                    }}
                    type="text"
                    placeholder="Channel Name"
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formChannelDescription">
                  <Form.Control
                    className="py-2 fs-5"
                    style={{
                      borderColor: "#BCBCBC",
                      borderWidth: "3px",
                      backgroundColor: "#555555",
                      color: "rgb(210,210,210,0.25)",
                      resize: "none",
                    }}
                    as="textarea"
                    rows={3}
                    placeholder="Channel Description"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ backgroundColor: "#FF7A00", border: "none" }}
                  className="py-2 fw-bold fs-5 w-100 text-white"
                >
                  Sign Up
                </Button>
                <div className="d-flex justify-content-center mt-3">
                  <p>Already have an account? Klik </p>
                  <Link
                    to="/"
                    onClick={props.onClick}
                    className=" ms-1 text-decoration-none text-black fw-bold"
                  >
                    Here
                  </Link>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Register;
