import React, { useState } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.button`
  color: #2f3337;
  font-family: Helvetica Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px;
  border: ${({ borderColor }) => `1px solid ${borderColor || '#dadcdf'}`};
  border-right: none;
  border-left: none;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? '1px solid #dadcdf' : 'none'};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid #dadcdf' : 'none')};
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: #f5f6f7;
  }
`

const StyledSvg = styled.svg`
  transform: ${({ isExpanded }) => isExpanded && 'rotate(180deg)'};
`

export default function Accordion({
  title,
  children,
  isExpanded: defaultExpanded,
  borderTop,
  borderBottom
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  function handleClick() {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <StyledHeader
        borderBottom={borderBottom}
        borderTop={borderTop}
        onClick={handleClick}
      >
        {title}
        <StyledSvg
          height='32px'
          width='32px'
          viewBox='0 0 19.399999618530273 11.099998474121094'
          aria-labelledby='aosi-evil-chevron-up-title'
          id='si-evil-chevron-up'
        >
          <title id='aosi-evil-chevron-up-title'>icon chevron-up</title>
          <path d='M18 11.1L9.7 2.8l-8.3 8.3L0 9.7 9.7 0l9.7 9.7z' />
        </StyledSvg>
      </StyledHeader>
      {isExpanded && <div>{children}</div>}
    </div>
  )
}

function Caret({ isExpanded }) {
  if (isExpanded) {
    return (
      <StyledSvg
        height='32px'
        width='32px'
        viewBox='0 0 19.399999618530273 11.099998474121094'
        aria-labelledby='aosi-evil-chevron-up-title'
        id='si-evil-chevron-up'
      >
        <title id='aosi-evil-chevron-up-title'>icon chevron-up</title>
        <path d='M18 11.1L9.7 2.8l-8.3 8.3L0 9.7 9.7 0l9.7 9.7z' />
      </StyledSvg>
    )
  }
}
