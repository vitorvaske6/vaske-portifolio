"use client"
import { useStateContext } from "@/contexts/ContextProvider";
import useWindowDimensions from "@/hooks/UseWindowDimensions";
import classNames from "classnames";
import { useEffect, useState } from "react";


type Menu = {
    key: string
    label: string
    icon: string
}

export const menus: Menu[] = [
    {
        key: 'about',
        label: 'About',
        icon: 'user-tie',
    },
    {
        key: 'projects',
        label: 'Projects',
        icon: 'rectangle-history',
    },
    {
        key: 'skills',
        label: 'Skills',
        icon: 'user-gear',
    },
    {
        key: 'contact',
        label: 'Contact',
        icon: 'envelope',
    },
]

export const Sidebar: React.FC<{}> = ({ }) => {
    const { mouseOver, activeMenu, handleMouseOver, handleClick, scrollFunction } = useStateContext()
    const { height, width } = useWindowDimensions();

    return (
        <div className={classNames({
            "hidden": width < 1280,
            "fixed left-4 z-50": true,
            "grid justify-center align-middle grid-rows-[40%_20%_40%]": true,
            "w-40 h-screen": true,
        })}>
            <div />
            <div className={classNames({
                "grid justify-center align-middle": true,
                "gap-y-2": true,
                "max-h-[190px]": true,
            })} >
                {menus.map((menu) => (
                    <div
                        key={menu.key}
                        className={classNames({
                            "flex justify-start align-middle": true,
                            "gap-4 w-28 max-h-6": true,
                            "cursor-pointer": true,
                            "transition-all delay-200": true,
                        })}
                        onMouseOver={() => handleMouseOver(menu.key)}
                        onMouseOut={() => handleMouseOver('')}
                        onClick={() => [handleClick(menu.key), scrollFunction(menu.key)]}>
                        <a className={classNames({
                            "font-sans font-semibold text-[16px] ": true,
                            "text-white text-shadow-[0_0px_2px_var(--tw-shadow-color)] shadow-white": menu.key === activeMenu && menu.key === mouseOver,
                            "text-transparent": menu.key !== mouseOver,
                            "text-gray-500": menu.key === mouseOver,
                            "flex align-middle gap-4": true,
                            "transition-all ease-linear": true,
                        })}>
                            <span className="relative flex h-3 w-3 align-middle cursor-pointer mt-1">
                                {(mouseOver === menu.key || activeMenu === menu.key) &&
                                    <span className="animate-ping absolute  h-full w-full rounded-full bg-gray-400 opacity-75" />}
                                <span
                                    className={classNames({
                                        "relative": true,
                                        "rounded-full h-full w-full": true,
                                        "border-2 border-opacity-60 border-gray-500": true,
                                        "bg-transparent": menu.key !== mouseOver && menu.key !== activeMenu,
                                        "bg-gray-400": menu.key === mouseOver || menu.key === activeMenu,
                                        "transition-all delay-200": true,
                                    })} />
                            </span>
                            <span>
                                {menu.label}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
            <div />
        </div>
    )


}

