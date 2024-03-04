import React from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const NewProjectPage = () => {
  return (
    <Box p={5}>
      <FormControl id="project-name" isRequired>
        <FormLabel>Project Name</FormLabel>
        <Input placeholder="Enter project name" />
      </FormControl>
      <FormControl id="project-description" isRequired mt={4}>
        <FormLabel>Project Description</FormLabel>
        <Textarea placeholder="Enter project description" />
      </FormControl>
      {}
      <Button leftIcon={<FaPlus />} colorScheme="blue" mt={4}>
        Add Project
      </Button>
    </Box>
  );
};

export default NewProjectPage;
