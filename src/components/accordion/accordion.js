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
  padding: 16px 0;
  border-right: none;
  border-left: none;
  background-color: white;
`

export default function Accordion({
  title,
  children,
  isExpanded: defaultExpanded
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  function handleClick() {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <StyledHeader onClick={handleClick}>
        {title}
        <Caret />
      </StyledHeader>
      {isExpanded && <div>{children}</div>}
    </div>
  )
}

function Caret() {
  return (
    <svg
      height='32px'
      width='32px'
      viewBox='0 0 19.400001525878906 11.100000381469727'
      aria-labelledby='alsi-evil-chevron-down-title'
      id='si-evil-chevron-down'
    >
      <title id='alsi-evil-chevron-down-title'>icon chevron-down</title>
      <path d='M9.7 11.1L0 1.4 1.4 0l8.3 8.3L18 0l1.4 1.4z' />
    </svg>
  )
}
