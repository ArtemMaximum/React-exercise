import React, { Component } from 'react'
import { remove, findIndex, propEq } from 'ramda'
import PropTypes from 'prop-types';

import { Category, StepsManager, ProgressBar, ContentTemplate, H4 } from 'ui'
import { defaultSteps } from 'scheme'

class SummaryPage extends Component {
  constructor(props) {
    super(props);

    this.selectStep = this.selectStep.bind(this);
    this.addNewStep = this.addNewStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
    this.editState = this.editState.bind(this);

    this.state = {
      steps: [],
      currentStep: 1
    }
  }

  selectStep(stepId) {
    let { currentStep } = this.state;

    if ((currentStep + 1) < stepId || (currentStep - 1) > stepId || currentStep === stepId) {
      return false;
    }

    this.setState({
      currentStep: stepId
    });
  }

  addNewStep() {
    if (this.state.steps.length === 5) {
      return false;
    }

    let newSteps = this.state.steps;

    for (let key in newSteps) {
      newSteps[key].isEditing = false;
    }

    newSteps.push({ title: 'Name', isEditing: true });

    this.setState({
      steps: newSteps
    });
  }

  deleteStep(stepId) {
    if (this.state.steps.length === 2) {
      return false;
    }

    let newSteps = remove(stepId, 1, this.state.steps);

    this.setState({
      steps: newSteps
    });
  }

  editState(stepId, key, value) {
    let newSteps = this.state.steps;

    if (key === 'isEditing') {
      for (let i in newSteps) {
        newSteps[i].isEditing = false;
      }
    }


    newSteps[stepId][key] = value;

    this.setState({
      steps: newSteps
    });
  }

  componentDidMount() {
    let { steps } = this.state;

    if (steps.length < defaultSteps.length) {

      this.setState({
        steps: defaultSteps
      });
    }
  }

  render() {
    return (
      <ContentTemplate>
        <Category title="Manage Steps" sup="Here you can manage the steps.">
          <StepsManager steps={this.state.steps} addNew={this.addNewStep} deleteStep={this.deleteStep}
                        editStep={this.editState}/>
        </Category>
        <Category title="Progress status" sup="Click to the points for action.">
          <ProgressBar steps={this.state.steps || defaultSteps}
                       current={this.state.currentStep}
                       selectStep={this.selectStep}/>
        </Category>
      </ContentTemplate>
    );
  }
}

SummaryPage.propTypes = {};

export default SummaryPage;