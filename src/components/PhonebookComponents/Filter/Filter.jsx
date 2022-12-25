import PropTypes from 'prop-types';
import { FilterInput, FilterWrapper } from './Filter.styled';

export const Filter = ({ onChange, value, onClick }) => {
  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </label>
        <button type="button" onClick={onClick}>
          Clear
        </button>
      </FilterWrapper>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
