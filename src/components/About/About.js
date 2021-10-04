import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-md-6">
                    <h2>About us</h2>
                    <p>
                        At Wheeler, we pride ourselves in the quality we deliver both in
                        class and on the road. Our instructors are fully committed into
                        deliver the best experience and to help you gain the best degree of
                        knowledge possible to become a safe driver. Our utilities and
                        maintenance training equipment and techniques which are up-to-date
                        in every respect. We offer our Students maximum flexibility,
                        starting with the convenience of Drivers Education in our program
                        approved by the Federal Road Safety Commission. All of our training
                        vehicles are equipped with decent brakes and decent accelerators as
                        well as safety-inspected. Every driving lesson is a PRIVATE lesson
                        consisting of one Student in the car.
                    </p>
                    <h4>Mission Statement</h4>
                    <p>
                        {" "}
                        Preserve the number 1 position of a top choice in the Driver
                        Training Industry and a top contender globally, through consistent
                        superior overhaul and abiding by professional standards.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1550517636-ad7bac40dc28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                        alt=""
                    />
                </div>
            </div>
            {/* instruction section */}
            <h2>Our instructors</h2>
            {/* card */}
            <CardGroup className="mb-5">
                <Card>
                    <Card.Img
                        className="instructor-img"
                        variant="top"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                    />
                    <Card.Body>
                        <Card.Title>Tom Charley</Card.Title>
                        <Card.Text>Driving Medical Traffic</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        className="instructor-img"
                        variant="top"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                    />
                    <Card.Body>
                        <Card.Title>James Fardinand</Card.Title>
                        <Card.Text>Driving instructor</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        className="instructor-img"
                        variant="top"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    />
                    <Card.Body>
                        <Card.Title>Cameroon Dias </Card.Title>
                        <Card.Text>Driving instructor</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default About;
