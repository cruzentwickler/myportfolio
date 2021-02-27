import styled from 'styled-components'

const Wrapper = styled.p`
  max-width: ${({ maxW }) => `${maxW}ch`};
  color: ${({ color }) =>
    color === 'primary' ? 'var(--color-primary)' : 'inherite'};
`

const Paragraph = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Paragraph
