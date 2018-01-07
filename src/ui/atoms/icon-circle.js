import React from 'react'
import styled from 'styled-components'


const CircleAtom = styled.span`
  display: block;
  position: relative;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? '#5125da' : '#dbdbdb'};
  margin: 0 auto;
  transition: all .3s;

  &:before {
    content: '';
    display: block;
    overflow: hidden;

    width: 24px;
    height: 24px;
    position: absolute;
    top: 8px;
    left: 8px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`

export const IconCircle = ({ isActive }) => (
  <CircleAtom isActive={ isActive } />
)
