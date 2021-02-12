import styled from 'styled-components'

export default function Layout({ children }) {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(65ch, calc(100% - 64px)) 1fr;
  grid-gap: 32px;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }
`
