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
import { useNavigate } from "react-router-dom";
import axios from "axios";

import WaysHub from "../../assets/images/WaysHub.png";
import { useGlobalContext } from "../../context/globalContext";
import Swal from "sweetalert2";

function Login() {
  const { userIsLogin } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Container className="p-3" style={{ marginTop: "14vh", height: "100vh" }}>
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
                onClick={() => navigate("/register")}
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#FF7A00",
                  border: "none",
                  width: "30%",
                }}
                className="mt-5 py-2 fw-bold fs-5 text-white"
              >
                Sign Up
              </Button>
            </Stack>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <Container
              className="rounded-4 p-5"
              style={{ backgroundColor: "#161616", width: "80%" }}
            >
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const responseBackend = await axios.post(
                      `${process.env.REACT_APP_BASE_URL}/login`,
                      {
                        email: email,
                        password: password,
                      }
                    );
                    await userIsLogin(responseBackend.data.data.token);
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Success",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/");
                  } catch (error) {
                    Swal.fire({
                      position: "center",
                      icon: "error",
                      title: "Failed",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    console.log(error);
                  }
                }}
              >
                <Form.Label className="fs-1 mb-5 fw-bold text-white">
                  Sign In
                </Form.Label>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Control
                    className="mb-3 py-2 fs-5"
                    style={{
                      borderColor: "#BCBCBC",
                      borderWidth: "3px",
                      backgroundColor: "#555555",
                      color: "rgb(210,210,210,0.25)",
                    }}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formPassword">
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ backgroundColor: "#FF7A00", border: "none" }}
                  className="py-2 fw-bold fs-5 w-100 text-white"
                >
                  Sign In
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
