import React from "react";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";


const VerticallyCenteredModal=(props)=> {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Body className="bg-dark text-white text-center">
                <div className="text-end">
                    <Button onClick={props.onHide} className="bg-dark border-0 rounded-circle">X</Button>
                </div>
                <h4 className="mt-3">Amount To Claim</h4>
                <p className="fs-3 my-5 border d-inline-block p-3 rounded-3">
                    {props.reward} BNB
                </p>
                <div>
                    <button className="primary-btn-1 mb-5 fs-5" onClick={props.claimReward}>Claim</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default VerticallyCenteredModal;
