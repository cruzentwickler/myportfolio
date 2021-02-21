import styled from 'styled-components'

const StyledLink = styled.a`
  color: red;
  font-size: 2rem;
`

const StyledText = styled.p`
  color: blue;
  margin: 2rem;
`

const MDXComponents = {
  a: (props) => <StyledLink {...props} />,
  p: (props) => <StyledText {...props} />,
}

export default MDXComponents
