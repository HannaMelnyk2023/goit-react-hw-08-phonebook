import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/contacts/operations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Flex alignItems="center" gap={4}>
      <Text color="white">Welcome, {email}</Text>
      <Button
        variant="outline"
        color="white"
        borderColor="white"
        _hover={{ bg: 'teal.600' }}
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </Flex>
  );
};
