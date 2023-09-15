"use client"

import { useStateContext } from "@/contexts/ContextProvider"
import Shiny from "../Shiny"
import { Button, Col, Grid, Image, Input, Link, Row, Text, Tooltip } from "@nextui-org/react"
import InputForm from "../InputForm"
import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"
import ModalWarning from "../ModalWarning"

type Submit = { 
    code: number, 
    message: string, 
    callback?: string
}

export const Contact = () => {
    const [input, setInput] = useState({
        name: '',
        lastname: '',
        subject: '',
        email: '',
        content: ''
    })

    const [visible, setVisible] = useState(false);
    const [resSubmit, setResSubmit] = useState<Submit>({ code: 0, message: '', callback: undefined })
    const handler = (resSubmit: Submit) => {
      setResSubmit(resSubmit)
      setVisible(true)
    };

    const closeHandler = () => {
        setVisible(false);
    };

    const onSubmit = async () => {
        console.log(input)
        
        const sendTo = input.email
        const subject = input.subject
        const content = `New message from:\n${input.name} ${input.lastname}.\nMessage:\n${input.content}`

        const response = await fetch(`/api/email/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sendTo: sendTo,
                subject: subject,
                content: content,
            }),
        });
        const response_json = await response.json()

        handler(response_json)
    }

    const handleInput = (field: string, data: string) => {
        setInput(prevInput => ({ ...prevInput, [`${field}`]: `${data}` }))
    }

    return (
        <div className="relative sm:px-4 md:px-8 px-2 grid gap-6 min-w-[484px]">
            <Shiny style={{ overflow: 'hidden', top: '40%', left: '50%' }} />
            <ModalWarning
                title={''}
                message={resSubmit.message}
                preventClose={false}
                isError={resSubmit.code === 200 ? false : true}
                visible={visible}
                callback={''}
                closeHandler={closeHandler}
            />
            <h1 className="uppercase" >
                Contact Me
            </h1>
            <div className="grid h-full gap-4 align-middle place-items-center w-full">
                <div className="flex flex-col gap-y-14  w-full md:w-[768px] sm:w-96">
                    <div className="grid grid-cols-2 gap-2">
                        <InputForm
                            keyName={'name'}
                            type="text"
                            labelName={"Name"}
                            placeholder={''}
                            hasIcon={false}
                            onChange={(e: FormEvent<HTMLInputElement>) => handleInput('name', e.currentTarget.value)} />
                        <InputForm
                            keyName={'lastname'}
                            type="text"
                            labelName={"Last Name"}
                            placeholder={''}
                            hasIcon={false}
                            onChange={(e: FormEvent<HTMLInputElement>) => handleInput('lastname', e.currentTarget.value)} />
                    </div>
                    <InputForm
                        keyName={'subject'}
                        type="text"
                        labelName={"Subject"}
                        placeholder={''}
                        hasIcon={false}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleInput('subject', e.currentTarget.value)} />
                    <InputForm
                        keyName={'email'}
                        type="text"
                        labelName={"E-mail"}
                        placeholder={''}
                        hasIcon={false}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleInput('email', e.currentTarget.value)} />
                    <InputForm
                        keyName={'content'}
                        type="textarea"
                        labelName={"Message"}
                        placeholder={''}
                        hasIcon={false}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleInput('content', e.currentTarget.value)} />
                    <span />
                    <Button auto rounded onClick={onSubmit}>
                        <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            SEND
                        </Text>
                    </Button>

                </div>
                <span className="border-b-[3px] border-[#FFFFFF26] w-[80%] my-6" />
                <h3 className="uppercase" >
                    My Socials
                </h3>
                <div className="grid grid-flow-col justify-center gap-12 w-fit">
                    <Tooltip content={
                        <Link href={'https://github.com/vitorvaske6'} className=" cursor-pointer text-white decoration-white" target="_blank" >
                            <span className={classNames({
                                "transition-all duration-300 flex gap-2": true,
                            })}>
                                <span className="font-semibold" >GitHub</span>
                                Vitor Vaske
                                <FontAwesomeIcon icon={faUpRightFromSquare} width={12} className="mb-2" />
                            </span>
                        </Link>
                    }>

                        <Link href={'https://github.com/vitorvaske6'} className=" cursor-pointer" target="_blank" >
                            <span className="flex place-items-center gap-2 text-xl text-white">
                                <Image
                                    src={'/github.svg'}
                                    width={60}
                                    height={60}
                                    alt="logo"
                                    className=""
                                />
                            </span>
                        </Link>
                    </Tooltip>
                    <Tooltip content={
                        <Link href={'https://www.linkedin.com/in/vitor-hugo-vasconcelos/'} className=" cursor-pointer text-white decoration-white" target="_blank" >
                            <span className={classNames({
                                "transition-all duration-300 flex gap-2": true,
                            })}>
                                <span className="font-semibold" >LinkedIn</span>
                                Vitor Vasconcelos
                                <FontAwesomeIcon icon={faUpRightFromSquare} width={12} className="mb-2" />
                            </span>
                        </Link>
                    }>
                        <Link href={'https://www.linkedin.com/in/vitor-hugo-vasconcelos/'} className=" cursor-pointer" target="_blank"  >
                            <span className="flex place-items-center gap-2 text-xl text-white">
                                <Image
                                    src={'/linkedin.png'}
                                    width={60}
                                    height={60}
                                    alt="logo"
                                    className=""
                                />
                            </span>
                        </Link>
                    </Tooltip>
                    <Tooltip content={
                        <Link href={'mailto:vitorvaske6@gmail.com'} className=" cursor-pointer text-white decoration-white" target="_blank" >
                            <span className={classNames({
                                "transition-all duration-300 flex gap-2": true,
                            })}>
                                <span className="font-semibold" >G-Mail</span>
                                vitorvaske6@gmail.com
                                <FontAwesomeIcon icon={faUpRightFromSquare} width={12} className="mb-2" />
                            </span>
                        </Link>
                    }>
                        <Link href={'mailto:vitorvaske6@gmail.com'} className=" cursor-pointer" target="_blank" >
                            <span className="flex place-items-center gap-2 text-xl text-white">
                                <Image
                                    src={'/gmail.png'}
                                    width={60}
                                    height={60}
                                    alt="logo"
                                    className=""
                                />
                            </span>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}