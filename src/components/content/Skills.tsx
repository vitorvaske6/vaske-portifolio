"use client"
import { useStateContext } from "@/contexts/ContextProvider"
import { Button, Card, Col, Modal, Row, Text, useTheme, Grid, Collapse, Tooltip } from '@nextui-org/react';
import { Image } from "@nextui-org/react";
import { useEffect, useMemo, useRef, useState } from "react"
import ModalProjects from "../ModalProjects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp, faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"
import React from 'react';
import Link from "next/link";
import { sorter, truncateFunction } from "@/utils/CustomFunctions";
import Shiny from "../Shiny";
import { SkillsType } from "@/app/page";
// import useOnScreen from "@/hooks/UseOnScreen";


type Props = {
    skills: SkillsType[]
}

export const Skills = ({ skills }: Props) => {
    const { scrollFunction, loadAnimation, refVisibleSkills } = useStateContext();
    const { theme } = useTheme();
    const [sortedSkills, setSortedSkills] = useState(skills)
    
    return (
        <div className="relative sm:px-4 md:px-8 px-2 grid gap-6" ref={refVisibleSkills}>
            <Shiny style={{ top: '50%', left: '50%', zIndex: 0 }} />
            <h1 className="uppercase" >
                Skills
            </h1>
            <h2 className="text-xl">
                In addition to my technical skills I also have some of the best soft skills for a developer such as: proactivity, problem solving, organization and autodidactism.
            </h2>
            <Grid.Container gap={2} justify="center">
                {sortedSkills?.map((skill, _) => (
                    <Grid xs={6} key={skill.key} className="flex flex-col place-items-center align-middle gap-4 h-20" >
                        <>
                            <span className={classNames({
                                "w-full text-start": true,
                            })}>{skill.name}</span>
                            <div style={{ backgroundColor: "white" }} className={classNames({
                                "h-1/2 bg-gray-200 w-full flex relative rounded-md": true
                            })}>
                                <span style={{
                                    backgroundColor: theme?.colors.primary.value,
                                    width: loadAnimation ? `${skill.percentage}%` : '0%'
                                }} className={classNames({
                                    "h-full absolute left-0": true,
                                    "transition-all duration-1000 rounded-[5px]": true,
                                })} />
                                <span 
                                style={{
                                    backgroundColor: theme?.colors.primary.value,
                                    left: loadAnimation ? `${skill.percentage-3}%` : '0%',
                                    opacity: loadAnimation ? 1 : 0,
                                }} className={classNames({
                                    "h-fit absolute top-[-40px] p-1 font-bold rounded-md": true,
                                    "transition-all duration-1000": true,
                                })} >
                                    {skill.percentage}%
                                </span>
                                <span className={classNames({
                                    "absolute h-[20px] bottom-[0px] w-[20px]": true,
                                    "transition-all duration-1000": true,
                                })}
                                    style={{
                                        left: loadAnimation ? `${skill.percentage - 2}%` : '1%',
                                        opacity: loadAnimation ? 1 : 0,
                                    }}>
                                    <span className={classNames({
                                        "border-solid border-t-8 border-x-transparent border-x-8 border-b-0": true,
                                        "transition-all duration-1000": true,
                                    })}
                                        style={{
                                            borderTopColor: theme?.colors.primary.value,
                                            opacity: loadAnimation ? 1 : 0,
                                        }} />
                                </span>
                            </div>
                        </>

                    </Grid>
                ))}
            </Grid.Container>
        </div>
    )
}