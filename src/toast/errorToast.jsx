import {Toast} from "react-bootstrap";
import React from "react";

const ErrorToast=(props)=>
{
    return(
        <React.Fragment>
            <Toast className="bg-danger error-toast" delay={3000} autohide show={props.show} animation>
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body className="text-white">Wrong Address Added!</Toast.Body>
            </Toast>
        </React.Fragment>
    );
}
export default ErrorToast;
