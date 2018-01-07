import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { themeOr } from 'lib/theme'

const colorLight = themeOr(['colors', 'header'], 'white')

const HeaderOrganism = styled.section`
  display: flex;
  flex-direction: column;
  background: #333333;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  color: ${colorLight};
`

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  z-index: 1;
  width: 100%;
  align-items: center;
`

export const Header = () => (
  <HeaderOrganism>
    <HeaderWrapper>
      <h1>React Exercise</h1>
    </HeaderWrapper>
  </HeaderOrganism>
)

Header.propTypes = {}

Header.defaultProps = {}