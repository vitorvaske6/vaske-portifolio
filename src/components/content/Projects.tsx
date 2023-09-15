"use client"
import { useStateContext } from "@/contexts/ContextProvider"
import { Button, Card, Col, Modal, Row, Text, useTheme, Grid, Collapse, Tooltip } from '@nextui-org/react';
import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import ModalProjects from "../ModalProjects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"
import React from 'react';
import Link from "next/link";
import { truncateFunction } from "@/utils/CustomFunctions";
import Shiny from "../Shiny";

export type Project = {
    key: string,
    label: string,
    description: string,
    origin: ProjectOrigin,
    cover: string,
    icon: ProjectIcon,
    features: ProjectFeature[]
    stack: ProjectStack[]
}

export type ProjectIcon = {
    src: string,
    background: string | null
}

export type ProjectFeature = {
    key: number,
    label: string,
    description: string,
    cover: string,
}

export type ProjectOrigin = {
    company: string,
    text: string,
    inProduction: boolean,
    site: string,
    github: string,
    private: boolean,
    icon?: ProjectIcon,
}

export type ProjectStack = {
    type: "Back-end" | "Front-end" | "Feature",
    items: ProjectStackItem[]
}

export type ProjectStackItem = {
    key: number,
    label: string,
    description: string,
    icon: string,
}

const projects: Project[] = [
    {
        key: 'myinsights',
        label: 'My INsights',
        description: 'The MyINsights Platform, affectionately called MyIN by us, aims to generate insights for the operational management of teams in the field, consolidating business data, device management, tickets and contracts in a single location, thus simplifying daily activities and increasing efficiency throughout the process.',
        origin: { company: 'MGITECH', site: 'https://www.mgitech.com.br/myin-plataforma-para-a-gestao-operacional-dos-times-em-campo', text: 'This project was developed for MGITECH with the intention to rebuild the old project developed in deprecated technology and rebuilding it in a more dynamic, modern and easely scalable technology (NextJS).', inProduction: true, github: 'https://github.com/vitorvaske6/myin', private: true, icon: {src: '/myin/mgitech.png', background: null}  },
        cover: '/myin/login.png',
        icon: {src: '/myin/logo.png', background: null},
        features: [
            {
                key: 0,
                label: "Login",
                description: "Login page using next-auth.",
                cover: "/myin/login.png",
            },
            {
                key: 1,
                label: "Home",
                description: "The homepage where all dashboards are shown.",
                cover: "/myin/initial-page.png",
            },
            {
                key: 2,
                label: "Dashboard",
                description: "An example of an working integration with Power BI embedded reports.",
                cover: "/myin/dashboard.png",
            },
        ],
        stack: [
            {
                type: "Front-end",
                items: [
                    {
                        key: 0,
                        label: "NextJS",
                        description: "Fullstack Framework",
                        icon: "/myin/stack/nextjs.png",
                    },
                    {
                        key: 1,
                        label: "TypeScript",
                        description: "Primary Language",
                        icon: "/myin/stack/typescript.png",
                    },
                    {
                        key: 2,
                        label: "TailwindCSS",
                        description: "CSS Framework",
                        icon: "/myin/stack/tailwindcss.png",
                    }
                ]
            },
            {
                type: "Back-end",
                items: [
                    {
                        key: 0,
                        label: "NodeJS",
                        description: "Runtime Environment",
                        icon: "/myin/stack/nodejs.png",
                    },
                    {
                        key: 1,
                        label: "NextJS",
                        description: "Fullstack Framework",
                        icon: "/myin/stack/nextjs.png",
                    },
                    {
                        key: 2,
                        label: "TypeScript",
                        description: "Primary Language",
                        icon: "/myin/stack/typescript.png",
                    },
                    {
                        key: 3,
                        label: "Prisma",
                        description: "TypeScript ORM",
                        icon: "/myin/stack/prisma.io.png",
                    },
                    {
                        key: 4,
                        label: "SQL Server",
                        description: "Database",
                        icon: "/myin/stack/sql-server.png",
                    },
                ]
            },
            {
                type: "Feature",
                items: [
                    {
                        key: 0,
                        label: "NextAuth.js",
                        description: "User Authentication",
                        icon: "/myin/stack/next-auth.png",
                    },
                    {
                        key: 1,
                        label: "Power BI",
                        description: "Power BI embedded reports",
                        icon: "/myin/stack/power-bi.png",
                    }
                ]
            },
        ]
    },
    {
        key: 'integratis',
        label: 'Integrátis API',
        description: 'Integrátis API is an REST API with an cronjob module that execute python scripts by schedule.',
        origin: { company: 'MGITECH', site: 'https://www.mgitech.com.br/', text: 'This project was developed for MGITECH with the intention to provide automations and/or integrations beteween different systems used by the company. The app consists in schedule how and when to execute those automations. The automations are purely developed in Python because of the expertise of the rest of the team.', inProduction: true, github: 'https://github.com/vitorvaske6/integratis', private: false, icon: {src: '/myin/mgitech.png', background: null} },
        cover: '/integratis/init.png',
        icon: {src: '/integratis/integratis.png', background: "#ffffff"},
        features: [
            {
                key: 0,
                label: "Initiating",
                description: "It shows the scripts with the job programmed.",
                cover: "/integratis/init.png",
            },
            {
                key: 1,
                label: "Execution",
                description: "It shows the name of the script that is being executed.",
                cover: "/integratis/execution.png",
            },
            {
                key: 2,
                label: "Errors",
                description: "It shows the errors if one is thrown.",
                cover: "/integratis/error.png",
            },
        ],
        stack: [
            {
                type: "Back-end",
                items: [
                    {
                        key: 0,
                        label: "NodeJS",
                        description: "Runtime Environment",
                        icon: "/integratis/stack/nodejs.png",
                    },
                    {
                        key: 1,
                        label: "TypeScript",
                        description: "Primary Language",
                        icon: "/integratis/stack/typescript.png",
                    },
                    {
                        key: 2,
                        label: "MongoDB",
                        description: "Database",
                        icon: "/integratis/stack/mongodb.png",
                    },
                ]
            },
            {
                type: "Feature",
                items: [
                    {
                        key: 0,
                        label: "Swagger",
                        description: "API Documentation",
                        icon: "/integratis/stack/swagger.png",
                    },
                    {
                        key: 1,
                        label: "JWT",
                        description: "API Authentication",
                        icon: "/integratis/stack/jwt.png",
                    },
                    {
                        key: 2,
                        label: "Python",
                        description: "Python Scripts Scheduled Jobs",
                        icon: "/integratis/stack/python.png",
                    },
                    {
                        key: 3,
                        label: "SAP Hana",
                        description: "Hana Query Executer",
                        icon: "/integratis/stack/sap-hana.png",
                    }
                ]
            },
        ]
    },
    {
        key: 'vaske-admin',
        label: 'Vaske Admin',
        description: 'Vaske Admin is an web application integrated with PowerBI & CubeJS to build and show dashboards.',
        origin: { company:'', site: '', text: 'This project was developed for studying purpose with the intention to learn how to properly integrate PowerBI in web applications and develop a custom solution of self-service BI using CubeJS and ChartsJS. The experience I got on this project led me to offering MGITECH to rebuild MyInsights.', inProduction: false, github: 'https://github.com/vitorvaske6/vaske_admin', private: false },
        cover: '/vaske-admin/custom-dashboard.png',
        icon: {src: '/vaske-admin/vaskeLogoBlack.svg', background: null},
        features: [
            {
                key: 0,
                label: "Custom Dashboard",
                description: "A dashboard that can be built using CubeJS to provide data and a custom builder for the charts.",
                cover: "/vaske-admin/custom-dashboard.png",
            },
            {
                key: 1,
                label: "Custom Dashboard",
                description: "Creating a new chart.",
                cover: "/vaske-admin/custom-new-chart.png",
            },
            {
                key: 2,
                label: "Custom Dashboard",
                description: "Editing one of the deployed charts.",
                cover: "/vaske-admin/custom-edit-chart.png",
            },
            {
                key: 3,
                label: "Power BI Dashboard",
                description: "A dashaboard created in Power BI embeded in the application.",
                cover: "/vaske-admin/powerbi-dashboard.png",
            },
            {
                key: 4,
                label: "Power BI Dashboard",
                description: "The dashboard with free mode enabled.",
                cover: "/vaske-admin/powerbi-free-mode.png",
            },
            {
                key: 5,
                label: "Power BI Dashboard",
                description: "The dashboard on a simple grid view.",
                cover: "/vaske-admin/powerbi-grid-view.png",
            },
            {
                key: 6,
                label: "Power BI Dashboard",
                description: "The dashboard filtered and a component that shows whatever is being filtered.",
                cover: "/vaske-admin/powerbi-show-filters-applyed.png",
            },
            {
                key: 7,
                label: "Swagger API Docs",
                description: "The API documentation.",
                cover: "/vaske-admin/swagger.png",
            },
            {
                key: 8,
                label: "Themes",
                description: "The themes menu where you can change the primary color and mode.",
                cover: "/vaske-admin/theme.png",
            }
        ],
        stack: [
            {
                type: "Front-end",
                items: [
                    {
                        key: 0,
                        label: "ReactJS",
                        description: "UI Library",
                        icon: "/vaske-admin/stack/react.png",
                    },
                    {
                        key: 1,
                        label: "JavaScript",
                        description: "Primary Language",
                        icon: "/vaske-admin/stack/javascript.png",
                    },
                    {
                        key: 2,
                        label: "TailwindCSS",
                        description: "CSS Framework",
                        icon: "/vaske-admin/stack/tailwindcss.png",
                    }
                ]
            },
            {
                type: "Back-end",
                items: [
                    {
                        key: 0,
                        label: "NodeJS",
                        description: "Runtime Environment",
                        icon: "/vaske-admin/stack/nodejs.png",
                    },
                    {
                        key: 1,
                        label: "TypeScript",
                        description: "Primary Language",
                        icon: "/vaske-admin/stack/typescript.png",
                    },
                    {
                        key: 2,
                        label: "MongoDB",
                        description: "Database",
                        icon: "/vaske-admin/stack/mongodb.png",
                    },
                ]
            },
            {
                type: "Feature",
                items: [
                    {
                        key: 0,
                        label: "Swagger",
                        description: "API Documentation",
                        icon: "/vaske-admin/stack/swagger.png",
                    },
                    {
                        key: 1,
                        label: "JWT",
                        description: "API Authentication",
                        icon: "/vaske-admin/stack/jwt.png",
                    },
                    {
                        key: 2,
                        label: "Google Auth",
                        description: "Google Auth Integration",
                        icon: "/vaske-admin/stack/google-auth.png",
                    },
                    {
                        key: 3,
                        label: "Power BI",
                        description: "Power BI embedded reports",
                        icon: "/vaske-admin/stack/power-bi.png",
                    },
                    {
                        key: 4,
                        label: "CubeJS",
                        description: "Semantic Layer for Data Modeling",
                        icon: "/vaske-admin/stack/cubejs.png",
                    },
                    {
                        key: 5,
                        label: "ChartsJS",
                        description: "Charts library",
                        icon: "/vaske-admin/stack/chartsjs.png",
                    }
                ]
            },
        ]
    },
]

type CarouselScrollerProps = {
    direction: 'left' | 'right'
    documentId: string
    _style?: {}
}

const CarouselScroller = ({ direction, documentId, _style }: CarouselScrollerProps) => {

    function scrollCarousel(direction: 'left' | 'right') {
        const element = document.getElementById(documentId)
        if (element)
            switch (direction) {
                case 'left':
                    element.scrollBy(-200, 0)
                    break;
                case 'right':
                    element.scrollBy(200, 0)
                    break;
                default:
                    break;

            }
    }

    return (
        <Button id={`carousel-scroll-${direction}`}
            auto
            style={{ height: 30, width: 30, borderRadius: "9999px", position: "absolute", zIndex: 1, ..._style }}
            color={'primary'}
            onClick={() => scrollCarousel(direction)}
        >
            <FontAwesomeIcon icon={direction === 'left' ? faCaretLeft : faCaretRight} width={20} height={20} />
        </Button>
    )
}

type ImageType = {
    key: string,
    title?: string,
    src: string,
    description?: string,
}

type CarouselModalProps = {
    image: ImageType | undefined;
    visible: boolean;
    closeHandler(): void;
};

const CarouselModal = ({ image, closeHandler, visible }: CarouselModalProps) => {
    if (image)
        return (
            <Modal
                closeButton={true}
                width="1920px"
                aria-labelledby="modal-title"
                open={visible}
                onClose={() => closeHandler()}>
                <Modal.Header />
                <Modal.Body>
                    <div className="flex align-middle justify-center">
                        <div className="relative ">
                            <Image
                                src={image.src}
                                width={1920}
                                height={1080}
                                alt={`${image.key}-cover`}
                                className="rounded-md transition-all"
                            />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
};

type CarouselProps = {
    keyVal: string
    images: ImageType[]
    primaryColor: string
}

export const Carousel = ({ keyVal, images, primaryColor }: CarouselProps) => {
    const [visible, setVisible] = useState(false)
    const [modalImage, setModalImage] = useState<ImageType>()
    const [first, setfirst] = useState(false)
    const [currentImage, setCurrentImage] = useState(images[0]);
    const closeHandler = () => {
        setVisible(false)
    }

    const openImageHandler = () => {
        setModalImage(currentImage)
        setVisible(true)
    }

    useEffect(
        () => {
            const index = images.findIndex(image => image.key === currentImage.key)
            const element = document.getElementById(`carousel-${keyVal}-images-scroller`)

            if (!element) {
                return
            }

            let timer = setTimeout(() => {
                let scroll_y = 0
                let index_image = 0

                if (index < images.length - 1) {
                    index_image = index + 1
                    scroll_y = index * 200
                }

                const image = {
                    key: `${images[index_image].key}`,
                    src: images[index_image].src,
                }

                currentImageHandler(image)
                element.scrollTo(scroll_y, 0)
            }, 7000);

            return () => {
                clearTimeout(timer);
            };
        },
        [currentImage]
    );

    const currentImageHandler = (image: ImageType) => {
        const _image = images.filter((__image) => { return `${__image.key}` === image.key })
        setCurrentImage(_image[0])
        const element = document.getElementById(`carousel-${currentImage.key}-images-scroller`)

        if (element)
            element.scrollTo(0, (parseInt(image.key) * 100))
    }


    return (
        <>
            <CarouselModal
                image={modalImage}
                closeHandler={closeHandler}
                visible={visible}
            />
            <div id={`carousel-${keyVal}`} className="grid grid-cols-1 gap-3 align-middle grid-rows-[2]">
                <div id="carousel-current-image" className="relative cursor-pointer" onClick={openImageHandler}>
                    <Image
                        src={currentImage.src}
                        width={1920}
                        height={1080}
                        className="rounded-md aspect-[16:9]"
                        alt={`${keyVal}-cover`}
                    />
                    {(currentImage?.title || currentImage?.description) && (
                        <p className={classNames({
                            'absolute bottom-0 left-0 right-0': true,
                            'h-full w-full ': true,
                            "rounded-md": true,
                        })}>
                            <span className={classNames({
                                "absolute bottom-[12px] right-[12px] left-[12px] h-[98px]": true,
                                "px-6 backdrop-blur-sm border-2 rounded-lg": true,
                                "bg-black bg-opacity-70 border-gray-700": true,
                                "grid align-text-top justify-start grid-cols-1 grid-rows-[35%_65%]": true,
                            })}>
                                <span className="text-xl font-semibold border-b-2 border-white">
                                    {currentImage.title}
                                </span>
                                <span className="text-lg font-medium overflow-hidden">
                                    {currentImage.description}
                                </span>
                            </span>
                        </p>
                    )}
                </div>
                <div key={`carousel-${keyVal}-images`} className="flex flex-row place-items-center relative  max-h-[100px]" >
                    <CarouselScroller direction="left" documentId={`carousel-${keyVal}-images-scroller`} _style={{ left: 4 }} />
                    <div id={`carousel-${keyVal}-images-scroller`}
                        className="grid grid-rows-1 grid-flow-col gap-2 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-none">
                        {images.map((image) => (
                            <div key={`carousel-${keyVal}-images-${image.key}`}
                                id={`carousel-${keyVal}-images-${image.key}`}
                                className="overflow-clip cursor-pointer relative min-w-[200px] min-h-[100px] "
                                onClick={() => currentImageHandler(image)}>
                                <Image
                                    src={image.src}
                                    width={200}
                                    height={100}
                                    alt={`${image.key}-cover`}
                                    className="rounded-md aspect-[16:9]"
                                />
                                <div className={classNames({
                                    'absolute left-0 right-0 top-0': true,
                                    'h-full': true,
                                    "opacity-20": true,
                                    'w-52 transition-width ease-in duration-7000': currentImage.key === image.key,
                                    "w-0": currentImage.key !== image.key,
                                })}
                                    key={`carousel-images-bar-${image.key}`}
                                    style={{ backgroundColor: primaryColor }}
                                />
                            </div>
                        ))}
                    </div>
                    <CarouselScroller direction="right" documentId={`carousel-${keyVal}-images-scroller`} _style={{ right: 4 }} />
                </div>
            </div>
        </>
    )
}

export const Projects = () => {
    const { scrollFunction } = useStateContext();
    const { theme } = useTheme();
    const [currentProject, setCurrentProject] = useState<Project>({ ...projects[0] });

    async function handler(project: Project) {
        if(currentProject.key === project.key){
            scrollFunction(`project-details-${project.key}`, "start")
        }
        else{
            setCurrentProject({ ...project })
            await 1000
            scrollFunction(`project-details-${project.key}`, "start")
        }
    };

    return (
        <div id='projects' className="relative sm:px-4 md:px-8 px-2 grid gap-6 max-w-7xl min-w-[484px] py-24" style={{ backgroundColor: theme?.colors.background.value }}>
            <Shiny style={{overflow: 'hidden', top: '20%', left: '50%', zIndex:0 }} />
            <Shiny style={{overflow: 'hidden', top: '45%', left: '50%' }} />
            <h1 className="uppercase" >
                Projects
            </h1>
            <Grid.Container gap={2} justify="center">
                {projects.map((project, _) => (
                    <Grid key={project.key} >
                        <Card css={{ w: "full", maxW: "500px", h: "300px" }}>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={project.cover}
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                    alt="Relaxing app background"
                                />
                            </Card.Body>
                            <Card.Footer
                                isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#0f111466",
                                    borderTop: "$borderWeights$light solid $gray800",
                                    bottom: 0,
                                    zIndex: 1,
                                }}
                            >
                                <Row css={{alignItems: 'center'}}>
                                    <Col>
                                        <Row >
                                            <Col span={3} className="p-2">
                                                <Card.Image
                                                    src={project.icon.src}
                                                    css={{ bg: project.icon.background ? project.icon.background : 'none', br: "30%" }}
                                                    height={40}
                                                    width={40}
                                                    alt="Breathing app icon"
                                                />
                                            </Col>
                                            <Col>
                                                <Text color="white" size={16} weight={"semibold"}>
                                                    {project.label}
                                                </Text>
                                                <Text color="white" size={14}>
                                                    {truncateFunction(project.description, 55, true)}
                                                </Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col css={{w:"80px"}}>
                                        <Row >
                                            <Button auto rounded onClick={() => handler(project)}>
                                                <Text
                                                    css={{ color: "inherit" }}
                                                    size={12}
                                                    weight="bold"
                                                    transform="uppercase"
                                                >
                                                    {project.key === currentProject.key ? "Opened" : "Open"}
                                                </Text>
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
            <div id={`project-details-${currentProject.key}`} />

            <div key={currentProject.key} className="grid gap-8 min-w-[460px]" >
                <div className="flex flex-col place-items-start gap-4">
                    <h1 className="uppercase text-3xl">
                        {currentProject.label}

                    </h1>
                    <h2 className="text-xl font-medium ml-6">
                    <span className="font-semibold">Description:&nbsp;&nbsp;</span>{currentProject.description}
                    </h2>
                    <h2 className="text-xl font-medium ml-6">
                        <span className="font-semibold">Purpose:&nbsp;&nbsp;</span>{currentProject.origin.text}
                    </h2>
                    {!currentProject.origin.private ? (
                        <Link href={currentProject.origin.github} className=" cursor-pointer" target="_blank"  >
                            <span className="flex place-items-center gap-2 text-xl text-white">
                                <Image
                                    src={'/github.svg'}
                                    width={24}
                                    height={24}
                                    alt="logo"
                                    className=""
                                />
                                See on <span className="font-semibold" >GitHub</span>
                                <FontAwesomeIcon icon={faUpRightFromSquare} width={12} className="mb-2" />
                            </span>
                        </Link>
                    ) : (
                        <Tooltip className="opacity-50 cursor-pointer" content="Private project :(">
                            <span className="flex place-items-center gap-2 text-xl text-white">
                                <Image
                                    src={'/github.svg'}
                                    width={24}
                                    height={24}
                                    alt="logo"
                                    className=""
                                />
                                See on <span className="font-semibold" >GitHub</span>
                                <FontAwesomeIcon icon={faUpRightFromSquare} width={12} className="mb-2" />
                            </span>
                        </Tooltip>
                    )}
                    {currentProject.origin.site && (
                        <Link href={currentProject.origin.site} className="cursor-pointer" target="_blank"  >
                            <span className="flex place-items-center gap-2 text-xl text-white">
                                {currentProject.origin.icon?.src ? (
                                    <Image
                                    src={currentProject.origin.icon?.src}
                                    width={24}
                                    height={24}
                                    alt="logo"
                                    className=""
                                />
                                ) : (<></>) }
                                
                                See on <span className="font-semibold" >{currentProject.origin.company}</span>
                                <FontAwesomeIcon icon={faUpRightFromSquare} width={12} className="mb-2" />
                            </span>
                        </Link>
                    )}
                </div>
                <Collapse.Group>
                    {currentProject.stack.map((stack, index) => (
                        <Collapse key={`collapse-stack-${index}`} title={stack.type}>
                            <Grid.Container gap={2} justify="center">
                                {stack.items.map((item, _index) => (
                                    <Grid key={_index}>
                                        <Card isPressable style={{ width: 200 }}>
                                            <Card.Body css={{ p: 0 }}>
                                                <Card.Image
                                                    src={item.icon}
                                                    objectFit="cover"
                                                    width={200}
                                                    height={200}
                                                    alt={item.label}
                                                />
                                            </Card.Body>
                                            <Card.Footer css={{ justifyItems: "flex-start" }}>
                                                <div  className="grid grid-cols-1">
                                                    <Text b>{item.label}</Text>
                                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                                        {item.description}
                                                    </Text>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid.Container>
                        </Collapse>
                    ))}
                </Collapse.Group>
                <Carousel keyVal={currentProject.key} 
                    images={
                    currentProject.features.map((feature) => {
                        return {
                            key: `${feature.key}`,
                            title: feature.label,
                            src: feature.cover,
                            description: feature.description
                        }
                    })}
                    primaryColor={`${theme?.colors.primaryLight.value}`}
                 />
            </div>
        </div>
    )
}