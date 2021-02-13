import React from 'react'
import styled from 'styled-components'

function heightGenerator(btnSize) {
  switch (btnSize) {
    case 'sm':
      return '32px'
    case 'lg':
      return '56px'
    default:
      return '44px'
  }
}

const StyledButton = styled.button`
  background-color: ${({ inverse, color }) => (inverse ? 'white' : color)};
  border-radius: 4px;
  border: ${({ inverse, color }) => (inverse ? `1px solid ${color}` : 'none')};
  color: ${({ inverse, color }) => (inverse ? color : 'white')};
  font-size: 14px;
  font-weight: normal;
  height: ${({ size }) => heightGenerator(size)};
  padding: 8px 16px;
  width: ${({ width }) => width};
  min-width: 164px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    background-color: ${({ inverse, color }) => (inverse ? color : '')};
    color: ${({ inverse, color }) => inverse && 'white'};
  }

  &:focus {
    -webkit-focus-ring-color auto 1px;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-offset: 3px;
    outline-width: 1px;
  }
`

export default function Button({
  children,
  color = '#1B1C1D',
  size = 'md',
  width = 'auto',
  disabled,
  onClick,
  className,
  inverse
}) {
  return (
    <StyledButton
      size={size}
      color={color}
      type='button'
      width={width}
      disabled={disabled}
      onClick={onClick}
      className={className}
      inverse={inverse}
    >
      {children}
    </StyledButton>
  )
}
