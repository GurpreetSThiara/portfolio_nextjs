"use client"

import { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button, Flex, Icon, useColorModeValue, Toast, useDisclosure,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
 
  Spinner, } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, Icon as MapIcon } from '@chakra-ui/icons';
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formBgColor = useColorModeValue('white', 'gray.800');
  const formTextColor = useColorModeValue( 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setIsLoading(true);
    onOpen();
    console.log("clicked");

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    const data = { name, email, message };

  
  
    const formData = new FormData();
    formData.append("Name", data.name);
    formData.append("Email", data.email);
    formData.append("Message", data.message);

    fetch(scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
        } else {
          return res.text();
        }
      })
      .then((data) => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsSuccess(true);
       
        // setIsSuccess(false);
      });
  };
  const renderModalContent = () => {
    if (isLoading) {
      return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Spinner size="xl" />
          <Text mt={4}>Sending your message...</Text>
        </Box>
      );
    } else if (isSuccess === true) {
      return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon as={CheckCircleIcon} w={12} h={12} color="green.500" />
          <Text mt={4}>Your message has been sent successfully!</Text>
        </Box>
      );
    } else {
      return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon as={CloseIcon} w={12} h={12} color="red.500" />
          <Text mt={4}>Failed to send your message. Please try again later.</Text>
        </Box>
      );
    }
  };
  return (
    <Box id="contact" p={{ base: '16', md: '20' }} className="container">
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
        <Text fontFamily="body" color="gray.500">
         
        </Text>
      </Box>
      <Box as="form" onSubmit={handleSubmit} mx="auto" w="full" pt="10" sm={{ w: '3/4' }}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Input 
            mr={{ base: '0', md: '3', lg: '5' }} 
            w="full" 
            rounded="md" 
            borderColor={borderColor} 
            px="4" 
            py="3" 
            fontFamily="body" 
            color={formTextColor} 
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
            borderColor={borderColor} 
            px="4" 
            py="3" 
            fontFamily="body" 
            color={formTextColor} 
            placeholder="Email" 
            type="email" 
            id="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Textarea 
          mt="6" 

          w="full" 
          rounded="md" 
          borderColor={borderColor} 
          px="4" 
          py="3" 
          fontFamily="body" 
          color={formTextColor} 
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
          _hover={{ bg: 'gray.600' }}
        >
          Send
          <Icon as={PhoneIcon} boxSize="6" ml="2" />
        </Button>
      </Box>
      <Flex direction={{ base: 'column', lg: 'row' }} pt="16">
        <Box w="full" border="2px" borderColor="gray.200" px="6" py="6" sm={{ py: '8' }} lg={{ w: '1/3' }}>
          <Flex alignItems="center">
            <Icon as={PhoneIcon} boxSize="6" color={secondaryTextColor} />
            <Text pl="2" fontFamily="body" fontWeight="bold" textTransform="uppercase" color={secondaryTextColor} lg={{ fontSize: 'lg' }}>
              My Phone
            </Text>
          </Flex>
          <Text pt="2" textAlign="left" fontFamily="body" fontWeight="bold" color="primary" lg={{ fontSize: 'lg' }}>
            +91 8872269487
          </Text>
        </Box>
        <Box 
          w="full" 
          borderLeft={{ base: '2px', lg: '0' }} 
          borderTop={{ base: '0', lg: '2px' }} 
          borderRight="2px" 
          borderBottom="2px" 
          borderColor="gray.200" 
          px="6" 
          py="6" 
          sm={{ py: '8' }} 
          lg={{ w: '1/3' }}
        >
          <Flex alignItems="center">
            <Icon as={EmailIcon} boxSize="6" color={secondaryTextColor} />
            <Text pl="2" fontFamily="body" fontWeight="bold" textTransform="uppercase" color={secondaryTextColor} lg={{ fontSize: 'lg' }}>
              My Email
            </Text>
          </Flex>
          <Text pt="2" textAlign="left" fontFamily="body" fontWeight="bold" color="primary" lg={{ fontSize: 'lg' }}>
          <a href="mailto:gurpreetthiara221098@gmail.com" target="_blank" rel="noopener noreferrer">
    gurpreetthiara221098@gmail.com
</a>

          </Text>
        </Box>
        <Box 
          w="full" 
          borderLeft={{ base: '2px', lg: '0' }} 
          borderTop={{ base: '0', lg: '2px' }} 
          borderRight="2px" 
          borderBottom="2px" 
          borderColor="gray.200" 
          px="6" 
          py="6" 
          sm={{ py: '8' }} 
          lg={{ w: '1/3' }}
        >
          <Flex alignItems="center">
            <Icon as={MapIcon} boxSize="6" color={secondaryTextColor} />
            <Text pl="2" fontFamily="body" fontWeight="bold" textTransform="uppercase" color={secondaryTextColor} lg={{ fontSize: 'lg' }}>
              My Address
            </Text>
          </Flex>
          <Text pt="2" textAlign="left" fontFamily="body" fontWeight="bold" color="primary" lg={{ fontSize: 'lg' }}>
           Hoshiarpur, Punjab
          </Text>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submission Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{renderModalContent()}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose} isDisabled={isLoading}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
