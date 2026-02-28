import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/contacts/operations';
import { Box, Input, Button, VStack } from '@chakra-ui/react';

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="username"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
          <Button type="submit" colorScheme="teal" width="full">
            Log In
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
