import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        /* colors */
        --color-bg:  #111827;

        --color-primary: #6EE7B7;
        --color-primary-100:  rgba(100, 255, 218, 0.1);
        --color-primary-200: ;
        --color-primary-300: ;

        --color-secondary: ;
        --color-secondary-100: ;
        --color-secondary-200: ;
        --color-secondary-300: ;

        --color-text:  #9CA3AF;
        --color-text-100: ;
        --color-text-200: ;
        --color-text-300: ;
        
        --color-white:  #F3F4F6;
        --color-white-100: ;
        --color-white-200: ;
        --color-white-300: ;

        /* fonts */
        --font-primary: 'Raleway', sans-serif;
        --font-secondary: 'Roboto Mono', monospace;

        /* set base values */
        --text-base-size: 16px;
        --base-responsive-text: clamp(1rem, 1.5vw, 1.25rem);
        --base-responsive-heading: clamp(2rem, 5vw, 4rem);

        /* set base transitions */
        --base-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        /* line-height */
        --heading-line-height: 1.1;
        --body-line-height: 1.5;
    }

    @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 100 900;
        font-display: optional;
        src: url(/fonts/raleway-variable.woff2) format('woff2');
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
        margin:0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-bg);
        color: var(--color-text);
        font-family: var(--font-primary);
        font-size: var(--text-base-size);
        line-height: var(--body-line-height);
        min-height: 100%;
        overflow-x: hidden;
        width: 100%;
    }

    ::selection {
        background-color: var(--color-primary);
        color: var(--color-white);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: var(--heading-line-height);
    }

    .hero-heading {
        font-size: var(--base-responsive-heading);
    }

   p {
        font-size: var(--base-responsive-text);
   }

    a {
        text-decoration: none;
        display: inline-block;
    }
`

export default GlobalStyle
