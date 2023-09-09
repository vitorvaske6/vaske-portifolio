"use client"
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "logo.png";
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Collapse } from "@nextui-org/react";
import { useStateContext } from "@/contexts/ContextProvider";
import { menus } from "./Sidebar";
import useWindowDimensions from "@/hooks/UseWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cross as Hamburger } from 'hamburger-react'

export const Navigation = ({ }) => {
  const { currentTheme, mouseOver, activeMenu, handleMouseOver, handleClick, scrollFunction, visibleNavigation } = useStateContext()
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [hideNavbar, setHideNavbar] = useState(false)
  const { height, width } = useWindowDimensions()
  const [smallNavbar, setSmallNavbar] = useState(width < 650)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (width < 650) {
      setSmallNavbar(true)
    } else {
      setSmallNavbar(false)
    }
  }, [width])

  useEffect(() => {
    var lastScrollTop = 0;
    document.addEventListener("scroll", (event) => {
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setHideNavbar(true)
        // console.log("scroll down")
      } else if (st < lastScrollTop) {
        setHideNavbar(false)
        // console.log("scroll up")
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
  }, [])

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <div
      onMouseOver={() => setHideNavbar(false)}
      className={classNames({
        "top-[12px] px-8": (!hideNavbar || visibleNavigation) && !smallNavbar,
        "top-[0px]": (!hideNavbar || visibleNavigation) && smallNavbar,
        "-top-[66px]": hideNavbar && !visibleNavigation,
        "transition-all duration-500": true,
        "fixed z-[200] w-full": true,
        "grid place-items-center": true,
      })}>
      <div className={classNames({
        "px-6 backdrop-blur-lg bg-gradient-to-b to-[rgba(0,0,0, 0.1)] min-h-[78px] w-full max-w-[1068px]": true,
        "border-2 rounded-lg": !smallNavbar,
        "border-b-2 ": smallNavbar,
        "from-[#000000] border-gray-700": currentTheme === 'dark',
        "from-[#ffffff] border-gray-300": currentTheme === 'light',
        "grid align-middle items-center grid-cols-2": true,
        "transition-all duration-500": true,
      })}>
        <div className={classNames({
          "grid w-full justify-start align-middle ": true
        })} >
          <Image
            src={currentTheme === 'dark' ? "/darkLogo.png" : "/lightLogo.png"}
            width={100}
            height={48}
            fill={false}
            alt="logo"
            className={classNames({
              "cursor-pointer fixed": true,
              "top-[18px]": smallNavbar,
              "top-[14px]": !smallNavbar,              
            })}
            onClick={() => [handleClick('about'), scrollFunction('about')]}
          />
        </div>
        <div className="grid justify-items-end">
          <Navbar.Content hideIn="xs" variant={'underline-rounded'} activeColor={'primary'}>
            {menus.map((menu) => (
              <Navbar.Link
                key={menu.key}
                isActive={menu.key === activeMenu}
                // color={'primary'}
                onClick={() => [handleClick(menu.key), scrollFunction(menu.key)]}>
                {menu.label}
              </Navbar.Link>
            ))}
          </Navbar.Content>
          <Navbar.Content showIn="xs" variant={'underline-rounded'} activeColor={'primary'}>
            <Collapse
              title={''}
              onClick={() => setOpen(prev => !prev)}
              expanded={isOpen}
              arrowIcon={(
                <Hamburger
                  // onToggle={}
                  size={24}
                  toggled={isOpen} />
              )}
              className={classNames({
                "w-full col-span-1": true,
                "transition-all duration-500": true,
              })}>
              <Navbar.Content variant={'underline-rounded'} css={{ display: 'grid', gap: 20, p: 30, placeItems: "end" }} activeColor={'primary'}>
                {menus.map((menu) => (
                  <Navbar.Link
                    css={{ h: '40px' }}
                    key={menu.key}
                    isActive={menu.key === activeMenu}
                    // color={'primary'}
                    onClick={() => [handleClick(menu.key), scrollFunction(menu.key), setOpen(false)]}>
                    {menu.label}
                  </Navbar.Link>
                ))}
              </Navbar.Content>
            </Collapse>

          </Navbar.Content>
        </div>
      </div>
    </div>
  )
}
