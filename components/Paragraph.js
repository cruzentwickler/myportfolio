import styled from 'styled-components'

const Wrapper = styled.p`
  color: ${({ color }) =>
    color === 'primary' ? 'var(--color-primary)' : 'inherite'};
  max-width: ${({ maxW }) => `${maxW}ch`};
`

const Paragraph = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Paragraph
