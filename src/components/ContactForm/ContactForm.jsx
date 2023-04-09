import { Formik } from 'formik';

import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormField, FormLabel } from './ContactForm.styled';
import { addContact } from 'redux/operations';

const initialFormValues = { name: '', phone: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${values.name} is already in contacts`);
      actions.resetForm();
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <FormField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor="number">
          Number
          <FormField
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
