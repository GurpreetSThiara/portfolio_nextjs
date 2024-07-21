"use client"
// components/ExperienceSection.js
import { Box, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const Experience = () => {

  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const textWidth = useBreakpointValue({ base: '100%', md: '75%' });


  return (
    <Box
    id="experience"
      bgGradient="linear(to-r, #002244, black)"
      p={{ base: 4, md: 8 }}
      color="white"
      borderRadius="md"
      opacity={0.8}
    >
           <Heading       textAlign="center"
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        fontWeight="semibold"
        fontFamily="heading"
        textTransform="uppercase"
        mb={8}>
        EXPERIENCE
      </Heading>
      <VStack align="start" spacing={6} display={'flex'} flexDirection={'column'} gap={'1rem'} justifyContent={'center'} alignItems={'center'}>
        <Box w={textWidth}> 
          <Text fontSize={textSize} fontWeight="bold">Intern at Virtusa</Text>
          <Text>September 2023 - March 2024</Text>
          <Text textAlign={'justify'}>
            During my internship at Virtusa, I had the opportunity to dive deep into full-stack development using Java. I worked on several projects where I learned the intricacies of backend development, database management, and API integration. This experience was invaluable as it laid a strong foundation for my career in software development.
          </Text>
        </Box>
        <Box  w={textWidth}>
          <Text fontSize={textSize} fontWeight="bold">Full Stack Developer at Kreativan Technologies, Chandigarh</Text>
          <Text>March 2024 - Present</Text>
          <Text textAlign={'justify'}>
            Currently, I am working at Kreativan Technologies as a Full Stack Developer. Here, I am involved in developing dynamic and responsive web applications using ReactJS for the frontend and Node.js for the backend. Additionally, I have been exploring mobile app development with Flutter. This role has allowed me to enhance my skills and contribute to various innovative projects, collaborating with a talented team.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Experience;
