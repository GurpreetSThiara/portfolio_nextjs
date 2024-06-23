"use client"
import React,{useState,useEffect} from 'react';
import { Box, SimpleGrid,Heading,Badge,Text,VStack,Stack,Flex,Table, Thead, Tbody, Tr, Th, Td  } from '@chakra-ui/react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@data/data';
import Link from 'next/link';

const ReactProjects = ({ params }) => {

  const data = PROJECTS_DATA[params.name];
  const [images , setImages] = useState(data.images);

  console.log(data)
  console.log(params)
  const x = './../../../../public/react/shopSphere';
  // Import all images dynamically
//  useEffect(()=>{
//   const importAll = (r) => r.keys().map(r);
//   const i = importAll(require.context(x, false, /\.(webp)$/));
//   setImages(i);
//  },[])

  return (
    <Box mt={'9rem'} p={'1rem'}>
       <Heading as="h1" size="xl" mb="8" textAlign="center">{data.title}</Heading>
      <Box textAlign={'center'}> {data.link &&  <Link legacyBehavior href="https://freeresumebuilder.vercel.app" passHref>
      
        <a target="_blank" rel="noopener noreferrer">
        https://freeresumebuilder.vercel.app
        </a>
      </Link>}</Box>
      
    <Flex justifyContent={'space-evenly'} flexDirection={{base:'column',md:'row'}}  gap="8" >

    <Box maxW="md" borderRadius="lg" overflow="hidden" boxShadow="md">
    <Table variant="simple" maxW="md" mx="auto">
      <Thead>
        <Tr>
          <Th>Tech Stack</Th>
          <Th>Details</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.tech.map((item, index) => (
          <Tr key={index} borderBottomColor={'blue'} borderColor={'blue'} border={'none'}>
            <Td>
              <Badge borderRadius="full" px="2" colorScheme="blue">
                {item.key}
              </Badge>
            </Td>
            <Td>{item.value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
      </Box>
      <Box maxW="md"  borderRadius="lg" overflow="hidden" boxShadow="md">
        <Box p="6">
          <Heading as="h3" size="md" mb="4">Key Features</Heading>
          <VStack align="start" spacing="2">
            {data.keyFeatures.map((feature, index) => (
              <Text key={index}>&bull; {feature}</Text>
            ))}
          </VStack>
        </Box>
      </Box>
    </Flex>
    <Heading as="h1" size="xl" mb="8" textAlign="center">
        Image Gallery
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
        {images?.map((image, index) => (
          <Box key={index} position="relative" overflow="hidden" borderRadius="md" boxShadow="md">
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              transition="0.3s ease-in-out"
              _hover={{ transform: 'scale(1.05)' }}
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="100%"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              p={4}
              opacity="0"
              transition="opacity 0.3s ease-in-out"
              _hover={{ opacity: 1 }}
            >
              <Stack>
                <Text fontWeight="bold">{image.title}</Text>
                <Text>{image.description}</Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ReactProjects;
