import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background:  #0a192f;
        --color-primary: #64ffda;
        --color-text:  #8892b0;
        --color-white:  #e6f1ff;

        --font-mono: 'Roboto Mono', monospace;
        --font-sans: 'Inter', sans-serif;

        --fz-heading: 32px;
        --fz-lg: 18px;
        --fz-md: 16px;
        --fz-sm: 14px;
        --fz-xl: 20px;
        --fz-xs: 13px;
        --fz-xxl: 22px;
        --fz-xxs: 12px;

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
        color: var(--color-text);
        background-color: var(--color-background);
        font-family: var(--font-sans);
        
    }

    h1 {
        color:var(--color-primary); 
    }

    a {
        text-decoration: none;
        display: inline-block;
    }
`

export default GlobalStyle
