import styled from 'styled-components'

const StyledSide = styled.div`
  position: fixed;
  left: ${({ orientation }) => (orientation === 'left' ? '40px' : 'auto')};
  right: ${(orientation) => (orientation === 'left' ? 'auto' : '40px')};
  bottom: 0;

  @media (max-width: 1080px) {
    left: ${({ orientation }) => (orientation === 'left' ? '20px' : 'auto')};
    right: ${({ orientation }) => (orientation === 'left' ? 'auto' : '20px')};
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const Side = ({ children, ...props }) => {
  return <StyledSide {...props}>{children}</StyledSide>
}

export default Side
