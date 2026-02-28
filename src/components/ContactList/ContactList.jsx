import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Button } from '@chakra-ui/react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button
            variant="outline"
            color="black"
            borderColor="white"
            _hover={{ bg: 'teal.600' }}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
