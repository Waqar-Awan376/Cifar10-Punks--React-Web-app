import {Toast} from "react-bootstrap";
import React from "react";

const SuccessToast =(props)=>
{
    return(
        <React.Fragment>
            <Toast className="bg-success error-toast" delay={3000} autohide show={props.show} animation>
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">Congratulations</strong>
                </Toast.Header>
                <Toast.Body className="text-white">{props.msg}</Toast.Body>
            </Toast>
        </React.Fragment>
    );
}
export default SuccessToast;
