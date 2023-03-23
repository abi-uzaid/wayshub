import React from "react";
import { Container, Form, Stack, Image, Card, Button } from "react-bootstrap"
import AttachIcon from "../assets/images/AttachIcon.png"
import UploadVideoIcon from "../assets/images/UploadVideoIcon.png"

function AddVideo() {
    return (
        <Container className="py-3 px-5" style={{marginTop:'10%'}}>
            <Form>
                <Form.Label className="text-white fs-4 fw-bold mb-4">Add Video</Form.Label>

                <Stack direction="horizontal">
                    <Form.Label className="me-auto w-100">
                        <Form.Control className="mb-3 py-1 fs-5" style={{ borderColor: '#BCBCBC', borderWidth: '3px', backgroundColor: '#555555', color: 'rgb(210,210,210,0.25)' }} type="text" placeholder="Video Title" />
                    </Form.Label>

                    <Form.Label className="ms-3 px-2 py-1 mb-4 text-secondary fw-normal rounded-2" style={{ width: '30%', border: 'solid', borderWidth: '3px', borderColor: '#BCBCBC', backgroundColor: '#555555', color: 'rgb(210,210,210,0.25)', cursor: 'pointer' }}>
                        <Stack direction="horizontal">
                            <Card.Text className="d-flex flex-column justify-content-center m-0 fs-5">Attach Thumbnail</Card.Text>
                            <Image src={AttachIcon} className="ms-auto" />
                        </Stack>
                        <Form.Control type="file" style={{ width: '100%' }} hidden />
                    </Form.Label>
                </Stack>

                <Form.Label className="me-auto w-100">
                    <Form.Control className="mb-3 py-1 fs-5" style={{ borderColor: '#BCBCBC', borderWidth: '3px', backgroundColor: '#555555', color: 'rgb(210,210,210,0.25)' }} as="textarea" rows="6" placeholder="Video Description" />
                </Form.Label>

                <Form.Label className="px-2 py-1 mb-4 text-secondary fw-normal rounded-2" style={{ width: '20%', border: 'solid', borderWidth: '3px', borderColor: '#BCBCBC', backgroundColor: '#555555', color: 'rgb(210,210,210,0.25)', cursor: 'pointer' }}>
                    <Stack direction="horizontal">
                        <Card.Text className="d-flex flex-column justify-content-center m-0 fs-5">Upload Video</Card.Text>
                        <Image src={UploadVideoIcon} className="ms-auto" />
                    </Stack>
                    <Form.Control type="file" style={{ width: '100%' }} hidden />
                </Form.Label>

                <Button variant="primary" type="submit" style={{ backgroundColor: '#FF7A00', border: 'none' }} className="py-2 fw-bold fs-5 w-100 text-white">
                    Add
                </Button>
            </Form>
        </Container>
    )
}

export default AddVideo