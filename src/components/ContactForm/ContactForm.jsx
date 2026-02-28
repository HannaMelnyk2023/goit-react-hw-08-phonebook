import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Box, Input, Button, VStack } from '@chakra-ui/react';

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
    <Box mb={6}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input name="name" type="text" placeholder="Name" required />
          <Input name="number" type="tel" placeholder="Phone number" required />
          <Button type="submit" colorScheme="teal" width="full">
            Add contact
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
