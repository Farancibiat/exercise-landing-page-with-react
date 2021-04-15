import React from "react";
import { Card, Button } from "react-bootstrap";

export const CardItem = () => {

    return (
            <Card className="mx-0">
                <Card.Img variant="top" src="https://via.placeholder.com/500x325.png" />
                <Card.Body className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Find Out More!</Button>
                </Card.Body>
            </Card>
    );
}

export default CardItem;