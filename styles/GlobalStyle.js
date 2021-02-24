import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background:  #0a192f;
        --color-primary: #64ffda;
        --color-primary-light: rgba(100, 255, 218, 0.1);
        --color-text:  #8892b0;
        --color-white:  #e6f1ff;

        --font-mono: 'Roboto Mono', monospace;
        --font-sans: 'Inter', sans-serif;

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        

        --nav-height: 6rem;

        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: optional;
        src: url(/fonts/inter-variable.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 100 900;
        font-display: optional;
        src: url(/fonts/roboto-mono-variable.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
        color: inherit;
        font-family: inherit;
        margin:0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
    }

    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-background);
        color: var(--color-text);
        font-family: var(--font-sans);
        font-size: var(--fz-xl);
        line-height: 1.3;
        min-height: 100%;
        overflow-x: hidden;
        width: 100%;

        @media (max-width: 480px) {
            font-size: var(--fz-lg);
        }
    }


    a {
        text-decoration: none;
        display: inline-block;
    }
`

export default GlobalStyle
