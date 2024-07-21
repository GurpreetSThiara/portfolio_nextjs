"use client";
import { Box, Heading, Text, VStack, HStack, IconButton, useColorMode, Link, Skeleton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const ReactProjects = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const data = [
    {
      title: "Resume Builder",
      link: "https://freeresumebuilder.vercel.app",
      description: "It can generate a customizable resume by entering data into input fields. The resume can be downloaded as a PDF using either Puppeteer or jsPDF"
    },
    {
      title: "React Colors App",
      link: "https://colors-components.vercel.app",
      description: "It can generate color variations based on input colors, including both darker and lighter shades."
    },
    {
      title: "Red Store Shopping App UI",
      link: "https://red-store-preet.vercel.app",
      description: "A shopping app UI created using html css and javascript"
    }
  ];

  const [iframeLoading, setIframeLoading] = useState(data.map(() => true));

  const handleIframeLoad = (index) => {
    setIframeLoading(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <Box mt="5rem" p="1rem" bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'} minH="100vh">
      <HStack justifyContent="flex-end" >
   
      </HStack>
      <Heading
        textAlign="center"
        fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
        fontWeight="semibold"
        fontFamily="heading"
        textTransform="uppercase"
        color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
      >
        ReactJS Projects
      </Heading>
      <VStack spacing={8} mt={8}>
        {data.map((project, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            w="full"
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
          >
            <Heading fontSize="xl">{project.title}</Heading>
            <Text mt={4}>{project.description}</Text>
            <Link href={project.link} mt={4} color={colorMode === 'dark' ? 'teal.300' : 'teal.500'} isExternal>
              View Project
            </Link>
            <Box mt={4} borderRadius="md" overflow="hidden" boxShadow="md">
              {iframeLoading[index] && <Skeleton height="400px" />}
              <iframe
                src={project.link}
                style={{ border: 'none', width: '100%', height: '400px', display: iframeLoading[index] ? 'none' : 'block' }}
                title={`${project.title} Preview`}
                onLoad={() => handleIframeLoad(index)}
              ></iframe>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ReactProjects;
