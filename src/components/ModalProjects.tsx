import React, { useState } from "react";
import { Button, Modal, Text, useModal, useTheme } from "@nextui-org/react";
import { useStateContext } from "../contexts/ContextProvider";
import classNames from "classnames";
import { Project } from "./content/Projects";
import BootstrapCarousel from "./BootstrapCarousel";

type Props = {
    project: Project | undefined;
    visible: boolean;
    closeHandler(): void;
};

const ModalProjects = ({ project, closeHandler, visible }: Props) => {
    const { theme } = useTheme();
    const { router, userData } = useStateContext();

    if(project)
        return (
                <Modal
                    closeButton={true}
                    className="md:min-w-[960px] min-w-[660px]"
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={() => closeHandler()}>
                    <Modal.Header>
                        <div className={classNames({
                            "flex relative justify-center items-center w-full": true,
                            "h-[50px]": true,
                        })}>
                        <Text
                            h1
                            size={22}
                            css={{
                                color: "$white",
                            }}
                            weight="bold"
                        >
                            {project.label}
                            <Text
                                h2
                                size={14}
                                css={{
                                    color: "$white",
                                }}
                                weight="light"
                            >
                                {project.description}
                            </Text>
                        </Text>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='p-7 pt-0 w-[600px] h-[600px]'>
                            <BootstrapCarousel items={project.features} />
                        </div>
                    </Modal.Body>
                </Modal>
        );
};
export default ModalProjects;

