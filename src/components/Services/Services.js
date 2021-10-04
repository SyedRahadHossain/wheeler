import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.JSON")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            <h2>This are some popular services of ours</h2>
            <Row xs={1} md={2} className="g-4 my-4">
                {services.slice(0, 4).map((service) => (
                    <Col key={service.key}>
                        <Card>
                            <Card.Img 
                            style={{height:300}}
                            className="img-thumbnail mx-auto"
                                variant="top" src={service.image} />
                            <Card.Body>
                                <Card.Title className="fw-bold">{service.name}</Card.Title>
                                <h6><span className="fw-bold">Duration:</span> {service.duration}</h6>
                                <button className="btn btn-dark fs-4 px-3 my-2">${service.price}</button>
                                <Card.Text>
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Services;
