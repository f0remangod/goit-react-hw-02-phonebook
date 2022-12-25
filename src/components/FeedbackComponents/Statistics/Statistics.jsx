import React from 'react';
import PropTypes from 'prop-types';
import {
  SingleFeedback,
  Summary,
  AllFeedbacks,
  Lable,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <AllFeedbacks>
        <SingleFeedback>
          <Lable>Good</Lable>
          <p>{good}</p>
        </SingleFeedback>
        <SingleFeedback>
          <Lable>Neutral</Lable>
          <p>{neutral}</p>
        </SingleFeedback>
        <SingleFeedback>
          <Lable>Bad</Lable>
          <p>{bad}</p>
        </SingleFeedback>
      </AllFeedbacks>

      <Summary>
        <Lable>Total: {total}</Lable>
        <Lable>Positive: {positivePercentage}</Lable>
      </Summary>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
