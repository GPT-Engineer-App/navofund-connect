import React, { useState } from "react";
import { Box, Stack, Text, Link, Button } from "@chakra-ui/react";
import { FaListAlt, FaRocketchat, FaCog, FaPlusSquare } from "react-icons/fa";

const Sidebar = ({ onToggle }) => {
  return (
    <Box position="fixed" left="0" p="5" w="250px" h="100%" bg="blue.800" color="white">
      <Button onClick={onToggle}>Menu</Button>
      <Stack spacing="6" display={{ base: "none", md: "block" }}>
        <Link to="/projects" display="flex" alignItems="center">
          <FaListAlt />
          <Text ml="4">Projects</Text>
        </Link>
        <Link to="/chatbox" display="flex" alignItems="center">
          <FaRocketchat />
          <Text ml="4">Chatbox</Text>
        </Link>
        <Link to="/settings" display="flex" alignItems="center">
          <FaCog />
          <Text ml="4">Settings</Text>
        </Link>
        <Link to="/new-project" display="flex" alignItems="center">
          <FaPlusSquare />
          <Text ml="4">List a New Project</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default Sidebar;
