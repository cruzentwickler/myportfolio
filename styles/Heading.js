import styled, { css } from 'styled-components'

const Wrapper = styled.h2`
  line-height: 1.1;
  font-size: var(--fz-lg);
  font-size: clamp(30px, 8vw, 60px);
  color: ${({ color }) => color};
`

const Heading = ({ level, children, ...props }) => {
  const tag = `h${level}`

  return (
    <Wrapper as={tag} {...props}>
      {children}
    </Wrapper>
  )
}

export default Heading
