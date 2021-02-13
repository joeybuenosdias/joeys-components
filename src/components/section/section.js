import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  border-radius: 4px;
  border: 1px solid #dadcdf;
  margin: 16px 0;
  padding: 16px;
  width: 100%;
`

const StyledContent = styled.div`
  color: #545658;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  padding: 8px 0;
`

const StyledHeader = styled.h2`
  color: #2f3337;
  font-family: Helvetica Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  margin: 0;
`

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <StyledHeader>{title}</StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledSection>
  )
}
