import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="number" type="tel" placeholder="Phone number" required />
      <button type="submit">Add contact</button>
    </form>
  );
}
