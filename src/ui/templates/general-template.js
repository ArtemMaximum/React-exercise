import React from 'react'
import PropTypes from 'prop-types'

import { Footer, Header } from 'ui'
import scheme from 'scheme'


const PoweredBy = () => (
  <div>
    Powered by&nbsp;
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
  </div>
)

const Copyright = () => (
  <div>
    Copyright Ⓒ 2017-{new Date().getFullYear()} Artem Maximum
  </div>
)

// eslint-disable-next-line react/prop-types
const Version = ({ version }) => (
  <div>
    Version: {version}
  </div>
)


export const GeneralTemplate = ({ children, version = '1.0.0' }) => [
  <Header key="header" />,
  children,
  <Footer key="footer">
    <PoweredBy />
    <Copyright />
    <Version version={version} />
  </Footer>,
]


GeneralTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string, // eslint-disable-line react/require-default-props
}
