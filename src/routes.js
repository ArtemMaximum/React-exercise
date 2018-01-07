import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RootTemplate, GeneralTemplate } from 'ui'
import { SummaryPage } from 'features/summary'
import { NotFoundPage } from 'features/not-found'

const LandingPage = () => (
  <GeneralTemplate>
    <SummaryPage/>
  </GeneralTemplate>
)

export default () => (
  <RootTemplate>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </RootTemplate>
)
