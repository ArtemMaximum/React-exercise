import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H4, IconCircle } from 'ui/atoms'

const StepWrapper = styled.a`
  display: flex;
  flex-direction: column;
  color: ${props => props.isActive ? '#5125da':'#dbdbdb'};
  cursor: pointer;
  transition: all .3s;
`

const StepTitle = H4.extend`
  display: flex;
  flex-flow: row nowrap;
  margin: 25px 0;
  
  & span {
    display: flex;
    flex-grow: 1;
    cursor: pointer;
  }
`

export const Step = ({ title, isActive, selectStep, stepId }) => (
  <StepWrapper isActive={isActive} onClick={() => {selectStep(stepId + 1)}}>
    <StepTitle>
      <span>{title}</span>
    </StepTitle>
    <IconCircle isActive={isActive} />
  </StepWrapper>
)