import { Box, Heading, Text, VStack, Stack, Divider } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box
      id="education"
     
      color="gray.50"
      p={{ base: 4, md: 8 }}
      borderRadius="md"
      shadow="lg"
      w={{lg:"50%"}}
      bg="rgba(0, 0, 0, 0.6)"
     

      mx="auto"
      mt={8}
    >
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Education
      </Heading>
      <Box justifyContent={'space-evenly'} spacing={8} align="stretch" display={{lg:'flex',base:'flex'}} flexDirection={{base:"column",lg:'row'}} gap={'1rem'} >
        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Dav University
          </Heading>
          <Text fontSize="md">B.Tech in Computer Science</Text>
          <Text fontSize="md">Graduation Year: 2022</Text>
          <Text fontSize="md">GPA: 7.86/10.0</Text>
        </Box>
        <Divider display={{lg:'none'}} borderColor="gray.600" />
        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Chitkara University
          </Heading>
          <Text fontSize="md">M.Tech in Computer Science</Text>
          <Text fontSize="md">Graduation Year: 2024</Text>
          <Text fontSize="md">GPA: 9.6/10.0</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
