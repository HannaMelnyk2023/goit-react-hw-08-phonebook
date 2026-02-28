import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Flex, Button } from '@chakra-ui/react';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Flex
      as="nav"
      justify="flex-end"
      align="center"
      gap={4}
      px={8}
      py={4}
      bg="teal.500"
      boxShadow="md"
    >
      {isLoggedIn ? (
        <>
          <UserMenu />
          <Button
            as={NavLink}
            to="/contacts"
            variant="ghost"
            color="white"
            _hover={{ bg: 'teal.600' }}
          >
            Contacts
          </Button>
        </>
      ) : (
        <>
          <Button
            as={NavLink}
            to="/register"
            variant="ghost"
            color="white"
            _hover={{ bg: 'teal.600' }}
          >
            Register
          </Button>

          <Button
            as={NavLink}
            to="/login"
            variant="ghost"
            color="white"
            _hover={{ bg: 'teal.600' }}
          >
            Log In
          </Button>
        </>
      )}
    </Flex>
  );
}
