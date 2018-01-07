import React from 'react'
import styled from 'styled-components'

const LineAtom = styled.span`
  display: block;
  position: absolute;
  bottom: 16px;
  width: 100%;
  height: 7px;
  background-color: #dbdbdb;
  z-index: -1;

  &:before {
    content: '';
    display: block;
    overflow: hidden;

    width: ${props => (parseInt(props.current, 10) / ( props.maxStepsCount / 100 )) || 0}%;
    height: 7px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #5125da;
    transition: all .3s;
  }
`

export const ProgressBarLine = ({ current, maxStepsCount }) => (
  <LineAtom current={current} maxStepsCount={maxStepsCount} />
)
