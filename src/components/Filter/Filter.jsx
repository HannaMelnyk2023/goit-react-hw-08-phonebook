import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactSlice';
import { Input, FormLabel, FormControl, Button } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <FormControl>
      <FormLabel color="teal.500" fontWeight="medium">
        <Button type="submit" colorScheme="teal" width="full">
          Find contacts by name
        </Button>
      </FormLabel>
      <Input
        type="text"
        placeholder="Search contacts"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FormControl>
  );
}
