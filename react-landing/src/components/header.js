import React from "react";
import { Jumbotron, Button} from "react-bootstrap";

export const Header = () => {

    return (
        <div className="container">
            <Jumbotron className="mb-0 my-4">
                <h1>A Warm Welcome!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tellus at lectus sagittis sagittis et et velit.
                    Aliquam quis nulla a massa eleifend consectetur ut at turpis.</p>
                <p>
                    <Button variant="primary">Call to action!</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Header;