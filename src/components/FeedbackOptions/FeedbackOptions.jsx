import React from 'react';
import PropTypes from 'prop-types';
import { FeedBackBtn, BtnsWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnsWrapper>
      {options.map(option => {
        return (
          <FeedBackBtn
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            value={option}
          >
            {option}
          </FeedBackBtn>
        );
      })}
    </BtnsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
