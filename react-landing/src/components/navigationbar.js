import React from "react";
import { Navbar, Nav} from "react-bootstrap";

export const NavigationBar = () => {

    return (
        <Navbar bg="dark" expand="lg">
            <div className="container">
            <Navbar.Brand href="#home" className="text-light font-weight-bold">Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="text-light font-weight-bold">Home</Nav.Link>
                    <Nav.Link href="#link" className="text-secondary font-weight-bold">About</Nav.Link>
                    <Nav.Link href="#link" className="text-secondary font-weight-bold">Services</Nav.Link>
                    <Nav.Link href="#link" className="text-secondary font-weight-bold">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavigationBar;