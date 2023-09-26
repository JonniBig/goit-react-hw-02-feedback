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

  render() {
    const { good, neutral, bad } = this.state.feedback;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
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
