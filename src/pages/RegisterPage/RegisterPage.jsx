import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/contacts/operations';
import { Box, Input, Button, VStack } from '@chakra-ui/react';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    dispatch(register({ name, email, password }));
    // form.reset();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <Button type="submit" colorScheme="teal" width="full">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
