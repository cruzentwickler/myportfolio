import styled from 'styled-components'
import { Side } from '@/components/index'
import { FaEnvelope } from 'react-icons/fa'

const StyledLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    background-color: var(--color-primary);
    content: '';
    display: block;
    height: 6rem;
    width: 1px;
  }

  a {
    align-items: center;
    border-radius: 100%;
    border: 1px solid var(--color-primary);
    display: flex;
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    height: 4rem;
    justify-content: center;
    letter-spacing: 0.15rem;
    width: 4rem;
    writing-mode: vertical-rl;

    &:hover {
      background-color: var(--color-primary-100);
      transition: var(--transition);
    }
  }
`

const Mail = ({ email }) => {
  return (
    <Side orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>
          <FaEnvelope />
        </a>
      </StyledLinkWrapper>
    </Side>
  )
}

export default Mail
