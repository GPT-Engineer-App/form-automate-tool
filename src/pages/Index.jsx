import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";

const sections = [
  { name: "Overview", id: "overview" },
  { name: "Architecture", id: "architecture" },
  { name: "User Interface", id: "user-interface" },
  { name: "Data Handling", id: "data-handling" },
  { name: "Web Automation", id: "web-automation" },
  { name: "Error Handling", id: "error-handling" },
  { name: "AI Integration", id: "ai-integration" },
  { name: "Integration", id: "integration" },
  { name: "Deployment", id: "deployment" },
  { name: "Maintenance", id: "maintenance" },
  { name: "Documentation", id: "documentation" },
  { name: "Roadmap", id: "roadmap" }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex direction="column" align="center" mb={10}>
        <FaTools size="3em" />
        <Heading as="h1" size="xl" mt={3} mb={2}>Form Automation Tool</Heading>
        <Text fontSize="lg" textAlign="center">Enhancing your form processes with cutting-edge automation and AI.</Text>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center" mb={10}>
        {sections.map(section => (
          <Link href={`#${section.id}`} p={2} fontSize="md" key={section.id} _hover={{ textDecoration: "underline" }}>
            {section.name}
          </Link>
        ))}
      </Stack>
      {sections.map(section => (
        <Box id={section.id} p={5} key={section.id}>
          <Heading as="h2" size="lg">{section.name}</Heading>
          <Text mt={3}>Content for {section.name}...</Text>
        </Box>
      ))}
    </Container>
  );
};

export default Index;