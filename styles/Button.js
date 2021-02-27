import styled from 'styled-components'

const Wrapper = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 1rem 1.5rem;
  font-size: var(--base-responsive-text);

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary-100);
    transition: var(--base-transition);
  }
`

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Button
