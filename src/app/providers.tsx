"use client"

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from '@nextui-org/react';
import NextNProgress from 'nextjs-progressbar';
import { DarkTheme, LightTheme } from "@/components/Theme";
import { ContextProvider, useStateContext } from '../contexts/ContextProvider';

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

export const Providers = ({ children }: UIProps) => {
    return (
        <NextAuthProvider>
          <ContextProvider>
            <NextUIProviderFunction>
              {children}
            </NextUIProviderFunction>
          </ContextProvider>
        </NextAuthProvider>
    )
}
