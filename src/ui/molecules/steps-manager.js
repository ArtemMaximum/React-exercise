import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StepItem, Button } from 'ui'

const StepsManagerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  
  & > a {
    align-self: flex-end;
  }
`

export const StepsManager = ({ children, steps, addNew, deleteStep, editStep }) => (
  <StepsManagerWrapper>
    {steps.map((step, i) => (
      <StepItem key={i} stepId={i} step={step} deleteStep={deleteStep} editStep={editStep}/>
    ))}
    <Button theme='success' onClick={addNew}>+ Add new</Button>
  </StepsManagerWrapper>
)

StepsManager.propTypes = {
}

StepsManager.defaultProps = {
}
