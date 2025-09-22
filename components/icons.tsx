import * as React from 'react'

import { IconSvgProps } from '@/types'

export const Logo: React.FC<IconSvgProps> = ({ size = 36, height, ...props }) => (
  <svg fill="none" height={size || height} viewBox="0 0 32 32" width={size || height} {...props}>
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export const DiscordIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export const TwitterIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  )
}

export const GithubIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const BrazilFlag: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      viewBox="-2100 -1470 4200 2940"
      width={size || width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <g id="G">
          <clipPath id="g">
            <path d="m-31.5 0v-70h63v70zm31.5-47v12h31.5v-12z" />
          </clipPath>
          <use clipPath="url(#g)" xlinkHref="#O" />
          <path d="M5-35H31.5V-25H5z" />
          <path d="m21.5-35h10v35h-10z" />
        </g>
        <g id="R">
          <use xlinkHref="#P" />
          <path d="m28 0c0-10 0-32-15-32h-19c22 0 22 22 22 32" />
        </g>
        <g id="s" fill="#fff">
          <g id="c">
            <path id="t" transform="rotate(18,0,-1)" d="m0-1v1h0.5" />
            <use transform="scale(-1,1)" xlinkHref="#t" />
          </g>
          <use transform="rotate(72)" xlinkHref="#c" />
          <use transform="rotate(-72)" xlinkHref="#c" />
          <use transform="rotate(144)" xlinkHref="#c" />
          <use transform="rotate(216)" xlinkHref="#c" />
        </g>
        <g id="a">
          <use transform="scale(31.5)" xlinkHref="#s" />
        </g>
        <g id="b">
          <use transform="scale(26.25)" xlinkHref="#s" />
        </g>
        <g id="f">
          <use transform="scale(21)" xlinkHref="#s" />
        </g>
        <g id="h">
          <use transform="scale(15)" xlinkHref="#s" />
        </g>
        <g id="i">
          <use transform="scale(10.5)" xlinkHref="#s" />
        </g>
        <path
          id="D"
          d="m-31.5 0h33a30 30 0 0 0 30-30v-10a30 30 0 0 0-30-30h-33zm13-13h19a19 19 0 0 0 19-19v-6a19 19 0 0 0-19-19h-19z"
          fillRule="evenodd"
        />
        <path
          id="E"
          transform="translate(-31.5)"
          d="m0 0h63v-13h-51v-18h40v-12h-40v-14h48v-13h-60z"
        />
        <path id="e" d="m-26.25 0h52.5v-12h-40.5v-16h33v-12h-33v-11h39.25v-12h-51.25z" />
        <path id="M" d="m-31.5 0h12v-48l14 48h11l14-48v48h12v-70h-17.5l-14 48-14-48h-17.5z" />
        <path
          id="O"
          d="m0 0a31.5 35 0 0 0 0-70 31.5 35 0 0 0 0 70m0-13a18.5 22 0 0 0 0-44 18.5 22 0 0 0 0 44"
          fillRule="evenodd"
        />
        <path
          id="P"
          d="m-31.5 0h13v-26h28a22 22 0 0 0 0-44h-40zm13-39h27a9 9 0 0 0 0-18h-27z"
          fillRule="evenodd"
        />
        <path
          id="S"
          d="m-15.75-22c0 7 6.75 10.5 16.75 10.5s14.74-3.25 14.75-7.75c0-14.25-46.75-5.25-46.5-30.25 0.25-21.5 24.75-20.5 33.75-20.5s26 4 25.75 21.25h-15.25c0-7.5-7-10.25-15-10.25-7.75 0-13.25 1.25-13.25 8.5-0.25 11.75 46.25 4 46.25 28.75 0 18.25-18 21.75-31.5 21.75-11.5 0-31.55-4.5-31.5-22z"
        />
      </defs>
      <clipPath id="B">
        <circle r="735" />
      </clipPath>
      <path d="m-2100-1470h4200v2940h-4200z" fill="#009440" />
      <path d="M -1743,0 0,1113 1743,0 0,-1113 Z" fill="#ffcb00" />
      <circle r="735" fill="#302681" />
      <path
        d="m-2205 1470a1785 1785 0 0 1 3570 0h-105a1680 1680 0 1 0-3360 0z"
        clipPath="url(#B)"
        fill="#fff"
      />
      <g transform="translate(-420,1470)" fill="#009440">
        <use transform="rotate(-7)" y="-1697.5" xlinkHref="#O" />
        <use transform="rotate(-4)" y="-1697.5" xlinkHref="#R" />
        <use transform="rotate(-1)" y="-1697.5" xlinkHref="#D" />
        <use transform="rotate(2)" y="-1697.5" xlinkHref="#E" />
        <use transform="rotate(5)" y="-1697.5" xlinkHref="#M" />
        <use transform="rotate(9.75)" y="-1697.5" xlinkHref="#e" />
        <use transform="rotate(14.5)" y="-1697.5" xlinkHref="#P" />
        <use transform="rotate(17.5)" y="-1697.5" xlinkHref="#R" />
        <use transform="rotate(20.5)" y="-1697.5" xlinkHref="#O" />
        <use transform="rotate(23.5)" y="-1697.5" xlinkHref="#G" />
        <use transform="rotate(26.5)" y="-1697.5" xlinkHref="#R" />
        <use transform="rotate(29.5)" y="-1697.5" xlinkHref="#E" />
        <use transform="rotate(32.5)" y="-1697.5" xlinkHref="#S" />
        <use transform="rotate(35.5)" y="-1697.5" xlinkHref="#S" />
        <use transform="rotate(38.5)" y="-1697.5" xlinkHref="#O" />
      </g>
      <use x="-600" y="-132" xlinkHref="#a" />
      <use x="-535" y="177" xlinkHref="#a" />
      <use x="-625" y="243" xlinkHref="#b" />
      <use x="-463" y="132" xlinkHref="#h" />
      <use x="-382" y="250" xlinkHref="#b" />
      <use x="-404" y="323" xlinkHref="#f" />
      <use x="228" y="-228" xlinkHref="#a" />
      <use x="515" y="258" xlinkHref="#a" />
      <use x="617" y="265" xlinkHref="#f" />
      <use x="545" y="323" xlinkHref="#b" />
      <use x="368" y="477" xlinkHref="#b" />
      <use x="367" y="551" xlinkHref="#f" />
      <use x="441" y="419" xlinkHref="#f" />
      <use x="500" y="382" xlinkHref="#b" />
      <use x="365" y="405" xlinkHref="#f" />
      <use x="-280" y="30" xlinkHref="#b" />
      <use x="200" y="-37" xlinkHref="#f" />
      <use y="330" xlinkHref="#a" />
      <use x="85" y="184" xlinkHref="#b" />
      <use y="118" xlinkHref="#b" />
      <use x="-74" y="184" xlinkHref="#f" />
      <use x="-37" y="235" xlinkHref="#h" />
      <use x="220" y="495" xlinkHref="#b" />
      <use x="283" y="430" xlinkHref="#f" />
      <use x="162" y="412" xlinkHref="#f" />
      <use x="-295" y="390" xlinkHref="#a" />
      <use y="575" xlinkHref="#i" />
    </svg>
  )
}

export const UsFlag: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 7410 3900"
    >
      <path d="M0,0h7410v3900H0" fill="#b31942" />
      <path
        d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
        stroke="#FFF"
        strokeWidth="300"
      />
      <path d="M0,0h2964v2100H0" fill="#0a3161" />
      <g fill="#FFF">
        <g id="s18">
          <g id="s9">
            <g id="s5">
              <g id="s4">
                <path
                  id="s"
                  d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                />
                <use xlinkHref="#s" y="420" />
                <use xlinkHref="#s" y="840" />
                <use xlinkHref="#s" y="1260" />
              </g>
              <use xlinkHref="#s" y="1680" />
            </g>
            <use xlinkHref="#s4" x="247" y="210" />
          </g>
          <use xlinkHref="#s9" x="494" />
        </g>
        <use xlinkHref="#s18" x="988" />
        <use xlinkHref="#s9" x="1976" />
        <use xlinkHref="#s5" x="2470" />
      </g>
    </svg>
  )
}

export const GlobeIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
        fill="currentColor"
      />
    </svg>
  )
}

export const MoonFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
)

export const SunFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
)

export const HeartFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
)

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const LinkedInIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
        fill="currentColor"
      />
    </svg>
  )
}
export const GmailIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        fill="currentColor"
      />
    </svg>
  )
}

// Skill Level Icons - Star-based proficiency indicators
export const StarFilledIcon: React.FC<IconSvgProps> = ({ size = 16, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="currentColor"
    />
  </svg>
)

export const StarEmptyIcon: React.FC<IconSvgProps> = ({ size = 16, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export const StarHalfIcon: React.FC<IconSvgProps> = ({ size = 16, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <defs>
      <clipPath id="half-star">
        <rect height="24" width="12" x="0" y="0" />
      </clipPath>
    </defs>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      clipPath="url(#half-star)"
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="currentColor"
    />
  </svg>
)

// Skill proficiency badge icons
export const BeginnerIcon: React.FC<IconSvgProps> = ({ size = 20, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <circle cx="12" cy="12" fill="currentColor" r="10" />
    <circle cx="12" cy="12" fill="white" r="6" />
  </svg>
)

export const IntermediateIcon: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <circle cx="12" cy="12" fill="currentColor" r="10" />
    <circle cx="12" cy="12" fill="white" r="6" />
    <circle cx="12" cy="12" fill="currentColor" r="3" />
  </svg>
)

export const AdvancedIcon: React.FC<IconSvgProps> = ({ size = 20, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <circle cx="12" cy="12" fill="currentColor" r="10" />
  </svg>
)

export const ExpertIcon: React.FC<IconSvgProps> = ({ size = 20, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <polygon
      fill="currentColor"
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
    />
  </svg>
)
export const LeftArrowIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const RightArrowIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
