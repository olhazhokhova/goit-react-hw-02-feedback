import React from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option.target.textContent]: prevState[option.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((val, acc) => val + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    if (this.state.good !== 0 && this.state.bad !== 0) {
      positivePercentage =
        (this.state.good / (this.state.bad + this.state.good)) * 100;
    } else if (this.state.bad === 0) {
      positivePercentage = 100;
    }
    return Math.round(positivePercentage * 100) / 100;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
