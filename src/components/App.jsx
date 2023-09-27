import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackWidget/FeedbackWidget';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state.feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state.feedback;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state.feedback)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
