import styled from 'styled-components'

const Wrapper = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-size: var(--fz-xs);
  padding: 0.8rem 1rem;

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary-light);
    transition: var(--transition);
  }
`

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Button
