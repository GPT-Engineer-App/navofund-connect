import React, { useState } from "react";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaListAlt, FaRocketchat, FaCog, FaPlusSquare } from "react-icons/fa";

const Sidebar = ({ onToggle }) => {
  return (
    <Box position="fixed" left="0" p="5" w="250px" h="100%" bg="blue.800" color="white">
      <Button onClick={onToggle}>Menu</Button>
      <Stack spacing="6" display={{ base: "none", md: "block" }}>
        <NavLink to="/projects" display="flex" alignItems="center">
          <FaListAlt />
          <Text ml="4">Projects</Text>
        </NavLink>
        <NavLink to="/chatbox" display="flex" alignItems="center">
          <FaRocketchat />
          <Text ml="4">Chatbox</Text>
        </NavLink>
        <NavLink to="/settings" display="flex" alignItems="center">
          <FaCog />
          <Text ml="4">Settings</Text>
        </NavLink>
        <NavLink to="/new-project" display="flex" alignItems="center">
          <FaPlusSquare />
          <Text ml="4">List a New Project</Text>
        </NavLink>
      </Stack>
    </Box>
  );
};

export default Sidebar;
