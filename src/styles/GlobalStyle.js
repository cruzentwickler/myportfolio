import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --color-text: blue;
        --color-background: lightgray;
        --color-primary: rebeccapurple;

        --font-serif: 'Inter', sans-serif;
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

    *,
    *::after,
    *::before {
        margin:0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
    }

    html {
        box-sizing: border-box;
    }

    body {
        background-color: var(--color-background);
        font-family: var(--font-serif);
    }
`

export default GlobalStyle
