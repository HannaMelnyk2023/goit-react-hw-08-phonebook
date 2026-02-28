import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { Box, Heading, VStack } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      bg="white"
    >
      <Heading size="lg" mb={4}>
        Phonebook
      </Heading>
      <ContactForm />
      <Heading size="md" mt={6} mb={4}>
        Contacts
      </Heading>
      <VStack spacing={4} align="stretch" mb={4}>
        <Heading size="sm">Filter Contacts</Heading>
        <Filter />
        <ContactList />
      </VStack>
    </Box>
  );
}
