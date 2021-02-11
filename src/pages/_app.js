import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: blue;
    --color-background: lightgray;
    --color-primary: rebeccapurple;
  }

  *,
  *::after,
  *::before {
    margin:0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-background);
  }
`

const theme = {}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
