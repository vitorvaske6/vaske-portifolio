"use client"

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from '@nextui-org/react';
import NextNProgress from 'nextjs-progressbar';
import { DarkTheme, LightTheme } from "@/components/Theme";
import { useStateContext } from '../contexts/ContextProvider';

type Props = {
    children?: React.ReactNode
};

export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

type UIProps = {
    children?: React.ReactNode
    theme?: string
};

export const NextUIProviderFunction = ({ children }: UIProps) => {
    const { currentTheme } = useStateContext();

    return (
        <NextUIProvider theme={currentTheme === 'dark' ? DarkTheme : LightTheme} >
            <NextNProgress />
            {children}
        </NextUIProvider>
    );
};

