import React from "react";
import { Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { FaCommentAlt } from "react-icons/fa";

const conversations = [
  { id: 1, name: "Alice Smith", lastMessage: "Hey, how are you?" },
  { id: 2, name: "Bob Johnson", lastMessage: "Project update needed!" },
];

const ChatboxPage = () => {
  return (
    <Box p={5}>
      <List spacing={3}>
        {conversations.map((conversation) => (
          <ListItem key={conversation.id} borderWidth="1px" shadow="md" borderRadius="lg" p={3}>
            <ListIcon as={FaCommentAlt} color="green.500" />
            <Text display="inline" fontWeight="bold">
              {conversation.name}
            </Text>
            <Text display="block">{conversation.lastMessage}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatboxPage;
