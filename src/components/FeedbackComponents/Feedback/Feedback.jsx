import React from 'react';
import { Statistics } from 'components/FeedbackComponents/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackComponents/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/FeedbackComponents/Notification/Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const value = event.target.value;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const totalAmount = stateValues.reduce(
      (acc, quantity) => acc + quantity,
      0
    );
    return totalAmount;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return `${Math.ceil((good / total) * 100)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statisctics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback 🍆"></Notification>
          )}
        </Section>
      </>
    );
  }
}
