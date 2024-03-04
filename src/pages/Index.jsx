import React from "react";
import { Box, Button, Container, Heading, SimpleGrid, Stack, Text, Input, Textarea, FormControl, FormLabel, Image, useToast } from "@chakra-ui/react";
import { FaHandHoldingUsd, FaBuilding, FaSeedling, FaCommentsDollar, FaPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTransaction = () => {
    toast({
      title: "Transaction Successful",
      description: "We've deducted 3% commission for the transaction.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="6xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Welcome to Navomark
      </Heading>
      <Stack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Project Listings</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={4}>
            <Box textAlign="center">
              <FaSeedling size="3em" />
              <Text mt={2}>Agriculture</Text>
            </Box>
            <Box textAlign="center">
              <FaBuilding size="3em" />
              <Text mt={2}>Construction</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Create a Project</Heading>
          <FormControl id="project-title" isRequired mt={4}>
            <FormLabel>Title</FormLabel>
            <Input placeholder="Project Title" />
          </FormControl>
          <FormControl id="project-description" isRequired mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Project Description" />
          </FormControl>
          <Button leftIcon={<FaPlus />} colorScheme="blue" mt={4}>
            Submit Project
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Funding and Transactions</Heading>
          <Button leftIcon={<FaHandHoldingUsd />} colorScheme="green" mt={4} onClick={handleTransaction}>
            Fund a Project
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Connect with Partners</Heading>
          <Button leftIcon={<FaCommentsDollar />} colorScheme="teal" mt={4}>
            Schedule a Meeting
          </Button>
        </Box>
      </Stack>
      <Box textAlign="center" mt={10}>
        <Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOYXZvbWFyayUyMGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTcwOTU3ODE0NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Navomark logo" boxSize="150px" objectFit="contain" mx="auto" />
      </Box>
    </Container>
  );
};

export default Index;
