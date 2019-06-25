import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const AppModal = React.memo((props) => (
    <div>

        <Modal isOpen={props.open} >
            <ModalHeader toggle={props.toggle}>{props.title} </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>

        </Modal>
    </div>

))

export default AppModal;