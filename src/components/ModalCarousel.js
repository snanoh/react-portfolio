import React, { useState } from 'react'
import { FileEarmarkSlides } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


function ModalCarousel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div style={{cursor: "pointer"}}>
                <FileEarmarkSlides className="ml-4" onClick={handleShow} />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={`img/java.png`}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCarousel
