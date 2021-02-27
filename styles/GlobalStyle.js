import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        /* colors */
        --color-bg:  #0a192f;

        --color-primary: #6EE7B7;
        --color-primary-100:  rgba(100, 255, 218, 0.1);

        --color-text:   #8892b0;
        --color-text-100: #a8b2d1;
        --color-text-200: #ccd6f6;
        
        --color-white:  #F3F4F6;

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

    h1.hero-heading {
        color: var(--color-text-200);
    }

   p {
        font-size: var(--base-responsive-text);
   }

    a {
        color: inherit;
        cursor: pointer;
        display: inline-block;
        text-decoration-skip-ink: auto;
        text-decoration: none;
        transition: var(--transition);
    
        &:hover {
            color: var(--color-primary);
        }
    }
`

export default GlobalStyle
