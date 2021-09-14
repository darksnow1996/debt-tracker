import React, { useState } from "react";
import {default as TailwindModal} from "./TailwindModal"
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
//import Button from "@material-tailwind/react/Button";

export default function Modal(props) {
    

    return (
        <>
            {/* <Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                Open regular Modal
            </Button> */}

            <TailwindModal size="regular" active={props.showModal} toggler={() => props.setShowModal(false)}>
                <ModalHeader toggler={() => props.setShowModal(false)}>
                    {props.title}
                </ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                    {/* <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setShowModal(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button> */}
                </ModalFooter>
            </TailwindModal>
        </>
    );
}