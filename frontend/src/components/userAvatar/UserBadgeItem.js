import { CloseIcon } from "@chakra-ui/icons";
import { Badge, Box, Text } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="full"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      transition="all 0.3s ease"
    >
      <Box display="flex" alignItems="center">
        <Text fontWeight="bold" mr={1}>
          {user.name}
        </Text>
        {admin === user._id && (
          <Text as="span" fontSize="10px" fontStyle="italic" ml={1}>
            (Admin)
          </Text>
        )}
      </Box>
      <CloseIcon 
        ml={1} 
        w={3} 
        h={3} 
        _hover={{ 
          color: "red.500",
        }}
      />
    </Badge>
  );
};

export default UserBadgeItem;