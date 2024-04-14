"use client"

import LoadingContext from '@/components/LoadingContext';
// import useOnScreen from '@/hooks/UseOnScreen';
import { isInViewport } from '@/utils/CustomFunctions';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

const StateContext = createContext<any>({});

type Props = {
    children?: ReactNode
}

export const ContextProvider = ({ children }: Props) => {
    // const [cookies, setCookie] = useState({ CookiesSchema });
    const { data: sessionData, status: sessionStatus } = useSession()
    const router = useRouter();
    const [mouseOver, setMouseOver] = useState('')
    const [activeMenu, setActiveMenu] = useState('about')
    const [currentTheme, setCurrentTheme] = useState('dark')

    const [hideNavbar, setHideNavbar] = useState(false)
    const [firstLoad, setFirstLoad] = useState(true)

    const { ref: refVisibleSkills, inView: loadAnimation, entry: entry_skills } = useInView({
        threshold: 0,
    });
    
    const { ref: refVisibleAbout, inView: visibleNavigation, entry: entry_nav } = useInView({
        threshold: 0,
    });

    const [windowDimensions, setWindowDimensions] = useState<{ width: number, height: number }>({width: 1920, height: 1080});

    const handleMouseOver = (key: string) => {
        setMouseOver(key)
    }

    const handleClick = (key: string) => {
        setActiveMenu(key)
    }


    function scrollFunction(key: string, _block: "center" | "end" | "nearest" | "start" = "start") {
        let e = document.getElementById(key);

        if (e)
            e.scrollIntoView({
                block: _block,
                inline: 'nearest'
            });
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({ width: screen.width, height: screen.height });
        }

        if (window) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        var lastScrollTop = 0;
        document.addEventListener("scroll", (event) => {
            var st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setHideNavbar(true)
                // //console.log("scroll down")
            } else if (st < lastScrollTop) {
                setHideNavbar(false)
                // //console.log("scroll up")
            } // else was horizontal scroll
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        });
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstLoad(false)
        }, 1500);
        return () => clearTimeout(timer);
    }, [])


    if (firstLoad) {
        return (
            <LoadingContext />
        )
    }

    const value = {
        router,
        sessionData, sessionStatus,
        mouseOver, activeMenu, handleMouseOver, handleClick, scrollFunction,
        currentTheme, setCurrentTheme,
        refVisibleAbout, visibleNavigation, 
        refVisibleSkills, loadAnimation,
        setHideNavbar, hideNavbar,
        windowDimensions
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);