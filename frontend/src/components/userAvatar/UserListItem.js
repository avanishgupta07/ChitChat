import { Avatar } from "@chakra-ui/avatar";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ handleFunction }) => {
  const { user } = ChatState();

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="gray.100"
      _hover={{
        background: "teal.500",
        color: "white",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={4}
      py={3}
      mb={3}
      borderRadius="lg"
      transition="all 0.3s ease"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
    >
      <Flex alignItems="center" width="100%">
        <Avatar
          mr={3}
          size="md"
          name={user.name}
          src={user.pic}
          border="2px solid"
          borderColor="teal.500"
        />
        <Box flex="1">
          <Text fontWeight="bold" fontSize="md">
            {user.name}
          </Text>
          <Text fontSize="sm" color="gray.600" _hover={{ color: "white" }}>
            {user.email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserListItem;