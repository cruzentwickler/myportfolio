import styled from 'styled-components'

const Wrapper = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-primary);
  font-size: var(--base-responsive-text);
  padding: var(--padding-btn);

  &:hover {
    background-color: var(--color-primary-t100);
    cursor: pointer;
    transition: var(--base-transition);
  }
`

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Button
