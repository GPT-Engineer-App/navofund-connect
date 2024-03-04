import React from "react";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

const fieldData = [
  { name: "Agriculture", image: "/path-to-agriculture-image.jpg" },
  { name: "Technology", image: "/path-to-technology-image.jpg" },
  { name: "Education", image: "/path-to-education-image.jpg" },
];

const ProjectsPage = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {fieldData.map((field) => (
          <Box key={field.name} borderWidth="1px" shadow="md" borderRadius="lg" overflow="hidden">
            <Image src={field.image} alt={`${field.name} field image`} />
            <Box p="6">
              <Text fontWeight="bold" textAlign="center">
                {field.name}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsPage;
