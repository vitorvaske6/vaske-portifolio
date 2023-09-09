import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

export const DarkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: '#2E3789',
            // primaryLightHover: '$green300',
            // primaryLightActive: '$green400',
            primaryLightContrast: '$white',
            primary: '#250091',
            secondary: '#150053',
            // primaryBorder: '$green500',
            // primaryBorderHover: '$green600',
            // primarySolidHover: '$green700',
            // primarySolidContrast: '$white',
            // primaryShadow: '$green500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

        },
        space: {},
        fonts: {}
    }
})

export const LightThemeJson = {
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: '#1ab394',
            primaryLightHover: '#18a689',
            primaryLightActive: '#1ab394',
            primaryLightContrast: '$green600',
            primary: '#1ab394',
            primaryBorder: '#1ab394',
            primaryBorderHover: '#18a689',
            primarySolidHover: '#18a689',
            primarySolidContrast: '#1ab394',
            primaryShadow: '#1ab394',

            secondary: '#fff',
            defaultBlack: '#000',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#1ab394'

            // ...  more colors
        },
        space: {},
        fonts: {}
    }
}

export const LightTheme = createTheme(LightThemeJson)