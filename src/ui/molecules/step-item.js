import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Field, H4, Button } from 'ui/atoms'

const StepItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`

const StepFieldWrapper = styled.div`
  display: ${props => props.isEditing ? 'flex' : 'none'};
  flex-direction: column;
  font-size: 22px;
`

const StepItemTitle = H4.extend`
  display: ${props => props.isEditing ? 'none' : 'flex'};
  flex-flow: row nowrap;
  margin: 6px 0;
  
  & button {
    display: flex;
    flex-grow: 1;
    cursor: pointer;
  }
`

export const StepItem = ({ step, stepId, deleteStep, editStep }) => (
  <StepItemWrapper>
    <StepItemTitle isEditing={step.isEditing}>
      <span>{step.title}</span>
    </StepItemTitle>
    <StepFieldWrapper isEditing={step.isEditing}>
      <Field value={step.title} onChange={(e) => { editStep(stepId, 'title', e.target.value) }}/>
    </StepFieldWrapper>
    <Button theme='info' onClick={() => { editStep(stepId, 'isEditing', !step.isEditing)}}>{step.isEditing ? 'Save' : 'Edit'}</Button>
    <Button theme='danger' onClick={() => { deleteStep(stepId)}}>Delete</Button>
  </StepItemWrapper>
)