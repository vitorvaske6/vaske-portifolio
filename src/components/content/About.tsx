"use client"

import { useStateContext } from "@/contexts/ContextProvider"
import Shiny from "../Shiny"

export const About = () => {
    const { refVisibleAbout } = useStateContext()

    return (
        <div className="relative flex gap-4 align-middle justify-center h-screen w-screen min-w-[484px] items-center font-mono text-sm lg:px-4 px-16 min-h-[100dvh]">
        <Shiny style={{overflow: 'hidden',top: '40%', left: '50%'}} />
                <div className='relative gap-3 align-middle justify-center'>
                    <h1 ref={refVisibleAbout} className='text-center text-2xl md:text-4xl text-white'>Hi,</h1>
                    <h1 className='text-center text-2xl md:text-4xl text-white'>I&apos;m Vitor</h1>
                    <h2 className='text-center text-sm md:text-lg text-gray-400'>Fullstack & Automation/Integration Developer</h2>
                    <h3 className="group text-center cursor-default">
                        <span className="font-mono text-lg text-gray-100">
                            Making your life easier since 2021&nbsp;
                            <span className="inline-flex pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                                and mine harder.
                            </span>
                        </span>
                    </h3>
                    <h4 className=' text-start text-sm md:text-lg text-gray-300 mt-5'>I&apos;m passionate about inovative technology, coding and gaming. I mostly shine by solving complex problems due to my planning, organization an self taught skills </h4>
                </div>
        </div>
    )
}