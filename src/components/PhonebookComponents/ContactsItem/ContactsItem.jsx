import PropTypes from 'prop-types';
import { Name, Item } from './ContactsItem.styled';

export const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <>
      <Item>
        <Name>{name}</Name>
        <span>{number}</span>
        <button type="button" onClick={() => onDelete(id)}>
          X
        </button>
      </Item>
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
