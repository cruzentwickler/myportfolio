import styled from 'styled-components'

const Wrapper = styled.h2`
  color: ${({ color }) => color};
  max-width: ${({ maxW }) => `${maxW}ch`};
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
