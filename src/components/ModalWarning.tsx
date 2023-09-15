import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Button, Input, Modal, Text, Textarea } from "@nextui-org/react";
import { faAnchorCircleXmark, faCircleXmark, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

type Props = {
    title: string;
    message: string;
    callback: string;
    preventClose: boolean;
    isError: boolean;
    visible: boolean;
    closeHandler(): void;
};
const ModalWarning = ({ closeHandler, isError, message, title, visible, preventClose }: Props) => {
    return (
        <div>
            <Modal
                closeButton
                preventClose={preventClose}
                aria-labelledby="modal-title"
                open={visible}
                onClose={() => closeHandler()}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        {
                            title ? 
                                title
                                :
                                isError ? 
                                'Error!' 
                                : 
                                'Sucess!'
                        }
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        {message}
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onPress={() => closeHandler()}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default ModalWarning;

