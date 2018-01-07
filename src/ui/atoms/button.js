import React from 'react'
import styled from 'styled-components'

const themes = {
  danger: '#db4437',
  success: '#0fdcaa',
  info: '#6565d6',
  warning: '#ccbe17'
}

const ButtonAtom = styled.a`
  display: block;
  position: relative;
  height: 40px;
  width: 100px;
  color: #ffffff;
  text-align: center;
  margin: 0 10px;
  line-height: 40px;
  font-weight: bold;
  border-radius: 3px;
  background-color: ${props => themes[props.theme]};
  cursor: pointer;
  transition: all .3s;
`

export const Button = ({ theme, children, onClick }) => (
  <ButtonAtom theme={theme} onClick={onClick}>{children}</ButtonAtom>
)
