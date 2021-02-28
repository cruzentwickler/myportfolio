import styled from 'styled-components'

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size
}

function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size
}

const Spacer = styled.span`
  display: block;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
  min-width: ${getWidth}px;
  width: ${getWidth}px;
`

export default Spacer
