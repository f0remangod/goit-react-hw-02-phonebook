import PropTypes from 'prop-types';
export const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <>
      <li>
        {name}: {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};
