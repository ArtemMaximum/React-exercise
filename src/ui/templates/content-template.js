import React from 'react'
import styled, { css } from 'styled-components'

import { width, mediaMaxWidth } from 'lib/sizes'


const ContentTemplateContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${width.laptop}px;
  padding-top: 20px;
`

// eslint-disable-next-line react/prop-types
const ContentConstructor = ({ className, children }) => (
  <section className={className}>
    <ContentTemplateContainer>
      {children}
    </ContentTemplateContainer>
  </section>
)

export const ContentTemplate = styled(ContentConstructor)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 0;

  ${p => p.background && css`
    background-color: ${p.background};
  `}

  ${p => p.color && css`
    color: ${p.color};
  `}

  ${mediaMaxWidth('tablet')} {
    padding: 20px 20px;
  }
`
