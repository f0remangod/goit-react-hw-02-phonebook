import React from 'react';
import initialValues from '../../json/initialValues';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';

export class Phonebook extends React.Component {
  state = {
    contacts: initialValues,
    filter: '',
  };

  handleFilterChange = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  clearFilterField = () => {
    this.setState({ filter: '' });
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <PhonebookForm
          contacts={contacts}
          addContact={this.addContact}
        ></PhonebookForm>

        <Filter
          onChange={this.handleFilterChange}
          value={filter}
          onClick={this.clearFilterField}
        ></Filter>

        <ContactsList
          filteredContacts={this.getFilteredContacts()}
          onDelete={this.deleteContact}
        ></ContactsList>
      </>
    );
  }
}
