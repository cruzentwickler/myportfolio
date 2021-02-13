import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/index'

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
