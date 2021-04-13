import React, { useState, useEffect } from 'react'
import { FileEarmarkSlides } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


function ModalCarousel(props) {
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
                <Modal.Header >
                <Modal.Title>Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {props.projectImg.map((image, index) =>(
                            <Carousel.Item>
                                <div key={index}>
                                    <img className="d-block w-100"
                                        src={`img/${image}`} />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                <button type="button" data-use-dark-mode="true" class="btn btn-dark btn-toggle me-2" onClick={handleClose}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCarousel
