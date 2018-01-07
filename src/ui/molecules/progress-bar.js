import React from 'react'
import styled from 'styled-components'

import { Step, ProgressBarLine } from 'ui'


const ProgressBarWrapper = styled.div`
  position: relative;
`

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

export const ProgressBar = ({ steps, current, selectStep }) => (
  <ProgressBarWrapper>
    <ProgressBarContainer>
      {steps.map((step, i) => (
        <Step key={i} stepId={i} title={step.title} isActive={ i+1 <= current } selectStep={selectStep} />
      ))}
    </ProgressBarContainer>
    <ProgressBarLine current={ current } maxStepsCount={steps.length} />
  </ProgressBarWrapper>
)