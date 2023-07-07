import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li key="good">
          Good: <span>{good}</span>
        </li>
        <li key="neutral">
          Neutral: <span>{neutral}</span>
        </li>
        <li key="bad">
          Bad: <span>{bad}</span>
        </li>
        <li key="total">
          Total: <span>{total()}</span>
        </li>
        <li key="positive">
          Positive feedback: <span>{positivePercentage()}%</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
