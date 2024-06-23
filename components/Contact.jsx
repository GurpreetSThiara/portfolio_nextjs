"use client"
import { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button, Flex, Icon } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, Icon as MapIcon } from '@chakra-ui/icons'; // Corrected import for MapIcon

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    const data = { name, email, message };

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Form submitted successfully');
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box id="contact" py={{ base: '16', md: '20' }} className="container">
      <Heading 
        textAlign="center" 
        fontFamily="header" 
        fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }} 
        fontWeight="semibold" 
        textTransform="uppercase" 
        color="primary"
      >
        {"Here's a contact form"}
      </Heading>
      <Heading 
        pt="6" 
        textAlign="center" 
        fontFamily="header" 
        fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }} 
        fontWeight="medium" 
        color="black"
      >
        Have Any Questions?
      </Heading>
      <Box mx="auto" w="full" pt="5" textAlign="center" sm={{ w: '2/3' }} lg={{ pt: '6' }}>
        <Text fontFamily="body" color="grey.10">
          Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
          condimentum turpis nisl sem, viverra habitasse urna ante lobortis
          fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
          accumsan.
        </Text>
      </Box>
      <Box as="form" onSubmit={handleSubmit} mx="auto" w="full" pt="10" sm={{ w: '3/4' }}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Input 
            mr={{ base: '0', md: '3', lg: '5' }} 
            w="full" 
            rounded="md" 
            borderColor="grey.50" 
            px="4" 
            py="3" 
            fontFamily="body" 
            color="black" 
            placeholder="Name" 
            type="text" 
            id="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            mt={{ base: '6', md: '0' }} 
            ml={{ base: '0', md: '3', lg: '5' }} 
            w="full" 
            rounded="md" 
            borderColor="grey.50" 
            px="4" 
            py="3" 
            fontFamily="body" 
            color="black" 
            placeholder="Email" 
            type="text" 
            id="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Textarea 
          mt="6" 
          w="full" 
          rounded="md" 
          borderColor="grey.50" 
          px="4" 
          py="3" 
          fontFamily="body" 
          color="black" 
          placeholder="Message" 
          id="Message" 
          cols="30" 
          rows="10" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
          mt="6" 
          type="submit"
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          rounded="md" 
          bg="primary" 
          px="8" 
          py="3" 
          fontFamily="header" 
          fontSize="lg" 
          fontWeight="bold" 
          textTransform="uppercase" 
          color="white" 
          _hover={{ bg: 'grey.20' }}
        >
          Send
          <Icon as={PhoneIcon} boxSize="6" ml="2" />
        </Button>
      </Box>
      <Flex direction={{ base: 'column', lg: 'row' }} pt="16">
        <Box w="full" border="2px" borderColor="grey.60" px="6" py="6" sm={{ py: '8' }} lg={{ w: '1/3' }}>
          <Flex alignItems="center">
            <Icon as={PhoneIcon} boxSize="6" color="grey.40" />
            <Text pl="2" fontFamily="body" fontWeight="bold" textTransform="uppercase" color="grey.40" lg={{ fontSize: 'lg' }}>
              My Phone
            </Text>
          </Flex>
          <Text pt="2" textAlign="left" fontFamily="body" fontWeight="bold" color="primary" lg={{ fontSize: 'lg' }}>
            (+881) 111 222 333
          </Text>
        </Box>
        <Box 
          w="full" 
          borderLeft={{ base: '2px', lg: '0' }} 
          borderTop={{ base: '0', lg: '2px' }} 
          borderRight="2px" 
          borderBottom="2px" 
          borderColor="grey.60" 
          px="6" 
          py="6" 
          sm={{ py: '8' }} 
          lg={{ w: '1/3' }}
        >
          <Flex alignItems="center">
            <Icon as={EmailIcon} boxSize="6" color="grey.40" />
            <Text pl="2" fontFamily="body" fontWeight="bold" textTransform="uppercase" color="grey.40" lg={{ fontSize: 'lg' }}>
              My Email
            </Text>
          </Flex>
          <Text pt="2" textAlign="left" fontFamily="body" fontWeight="bold" color="primary" lg={{ fontSize: 'lg' }}>
            name@mydomain.com
          </Text>
        </Box>
        <Box 
          w="full" 
          borderLeft={{ base: '2px', lg: '0' }} 
          borderTop={{ base: '0', lg: '2px' }} 
          borderRight="2px" 
          borderBottom="2px" 
          borderColor="grey.60" 
          px="6" 
          py="6" 
          sm={{ py: '8' }} 
          lg={{ w: '1/3' }}
        >
          <Flex alignItems="center">
            <Icon as={MapIcon} boxSize="6" color="grey.40" />
            <Text pl="2" fontFamily="body" fontWeight="bold" textTransform="uppercase" color="grey.40" lg={{ fontSize: 'lg' }}>
              My Address
            </Text>
          </Flex>
          <Text pt="2" textAlign="left" fontFamily="body" fontWeight="bold" color="primary" lg={{ fontSize: 'lg' }}>
            123 New York D Block 1100, 2011 USA
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
