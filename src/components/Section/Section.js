import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const Section = ({
  title,
  state,
  onLeaveFeedback,
  total,
  positivePercentage,
}) => {
  const { good, neutral, bad } = state;

  return (
    <section>
      <h1>{title}</h1>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      {total() > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}

      <Notification message="There is no feedback" total={total}></Notification>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
