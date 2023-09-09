"use client"

import useOnScreen from '@/hooks/UseOnScreen';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

const StateContext = createContext<any>({});

type Props = {
    children?: ReactNode
}

export const ContextProvider = ({ children } : Props) => {
    // const [cookies, setCookie] = useState({ CookiesSchema });
    const { data: sessionData, status: sessionStatus } = useSession()
    const router = useRouter();
    const [mouseOver, setMouseOver] = useState('')
    const [activeMenu, setActiveMenu] = useState('about')
    const [currentTheme, setCurrentTheme] = useState('dark')

    const refVisibleAbout = useRef<HTMLDivElement>(null)
    const visibleNavigation = useOnScreen(refVisibleAbout)

    const handleMouseOver = (key: string) => {
        setMouseOver(key)
    }

    const handleClick = (key: string) => {
        setActiveMenu(key)
    }

    function scrollFunction(key: string, _block: "center" | "end"  | "nearest"  | "start" = "start") {
        let e = document.getElementById(key);

        if (e)
            e.scrollIntoView({
                block:  _block,
                inline: 'nearest'
            });
    }

    const value = {
        router,
        sessionData, sessionStatus,
        mouseOver, activeMenu, handleMouseOver, handleClick, scrollFunction,
        currentTheme, setCurrentTheme,
        refVisibleAbout, visibleNavigation
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);