import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import initialValues from '../../json/initialValues';

export class Phonebook extends React.Component {
  state = {
    contacts: initialValues,
    filter: '',
    name: '',
    number: '',
  };

  addContact = () => {};

  handleFormSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    const newContactName = contact.name;
    const alreadyExists = this.state.contacts.findIndex(
      contact => contact.name.toLowerCase === newContactName.toLowerCase
    );

    switch (alreadyExists >= 0) {
      case true:
        Notify.failure(`${newContactName} is already in contacts`);
        break;
      default:
        this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
    }

    this.resetForm();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  clearFilterField = () => {
    this.setState({ filter: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <label htmlFor="filter">
          Find contacts by name
          <input
            type="text"
            id="filter"
            name="filter"
            value={this.state.filter}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="button" onClick={this.clearFilterField}>
          Clear
        </button>
        <ul>
          {this.getFilteredContacts().map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  onClick={() => this.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
