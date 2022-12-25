import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          ></ContactsItem>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
