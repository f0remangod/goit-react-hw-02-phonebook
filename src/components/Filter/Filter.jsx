import PropTypes from 'prop-types';
export const Filter = ({ onChange, value, onClick }) => {
  return (
    <>
      <label htmlFor="filter">
        Find contacts by name
        <input
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
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
