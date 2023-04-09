import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';

import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  // console.log(contacts);
  const findNameByFilter = () => {
    const findName = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return findName;
  };
  return (
    <ul>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>{error}</b>}
      {findNameByFilter().map(contact => {
        return (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
