import React from "react";
import { Routes, Route } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { API, setAuthToken } from './config/api';

import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import Creator from "./pages/Creator";
import MyChannel from "./pages/MyChannel"
import EditChannel from "./pages/EditChannel"
import VideoDetail from "./pages/VideoDetail"

function App() {
  return (
    <>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>


      
        <Container className="p-0 m-0" style={{ maxWidth: '100%', height: '100vh' }}>
          <Row lg={2} className="p-0 m-0">

            <Col lg={3} className="p-0 m-0">
              <Sidebar />
            </Col>

            <Col lg={9} className="p-0 m-0">
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/addvideo' element={<AddVideo />} />
                <Route exact path='/creator' element={<Creator />} />
                <Route exact path='/mychannel' element={<MyChannel />} />
                <Route exact path='/editchannel' element={<EditChannel />} />
                <Route exact path='/videodetail' element={<VideoDetail />} />

              </Routes>
            </Col>
          </Row>
        </Container>

    
    </>
  );
}

export default App;
