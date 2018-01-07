import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, Hint } from 'ui/atoms'


const CategoryHeader = H2.extend`
  display: flex;
  flex-flow: row nowrap;

  & span {
    display: flex;
    flex-grow: 1;
  }
`

const Sup = Hint.withComponent('sup').extend`
  display: flex;
  top: 0;
  font-size: 70%;
  line-height: 150%;
`

const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CategoryWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`

export const Category = ({ children, title, sup }) => (
  <CategoryWrapper>
    <CategoryHeader>
      <span>{title}</span>
      {sup && <Sup>{sup}</Sup>}
    </CategoryHeader>
    <CategoryContent>
      {children}
    </CategoryContent>
  </CategoryWrapper>
)

Category.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  sup: PropTypes.string,
}

Category.defaultProps = {
  sup: '',
}
