'use client';
import {useState} from 'react';
import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Button,
  IconButton,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  Stack,
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';


const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure ();
  const [activeSection, setActiveSection] = useState ('');

  const triggerNavItem = section => {
    setActiveSection (section);
    document.querySelector (section).scrollIntoView ({behavior: 'smooth'});
  };

  return (
    <Box
      m={0}
      position={'fixed'}
      w="full"
      top={0}
      py={3}
      zIndex={50}
      bgGradient="linear(to-r, black, #121212)"
      px={'1rem'}
    >
      <Flex w="full" alignItems={'center'} justifyContent="space-between">
        <Box>
          <Link href="/" _hover={{border: 'none'}}>
            <Heading
              textShadow="2px 2px 5px rgba(0, 0, 0, 0.3)"
              as="h1"
              fontWeight="bold"
              fontSize={{base: 'x-large', md: 'xxx-large'}}
            >
              <Box
                bgGradient="linear(to-r, teal.300, blue.800)"
                bgClip="text"
                fontWeight="bold"
                display="inline"
              >
                GSingh
              </Box>
            </Heading>
            {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}
            {/* <Image src="/assets/img/logo.svg" w={{ base: "6rem", lg: "12rem" }} alt="logo image" /> */}
          </Link>
        </Box>
        <Box display={{base: 'none', lg: 'block'}}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="1rem"
          >
            {[
              'About',
      
              'Experience',
            
              'Skills',
              'Services',
              'Portfolio',
              'Apps',
              'Education',
          
             
              'Contact',
            ].map (item => (
              <Box key={item} mx="1rem">
                <Link
                  onClick={() => triggerNavItem (`#${item.toLowerCase ()}`)}
                  cursor="pointer"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  color="white"
                  position="relative"
                  _after={{
                    content: '""',
                    display: 'block',
                    width: 'full',
                    height: '2px',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.2s',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                  }}
                  _hover={{
                    _after: {
                      backgroundColor: 'gray.300',
                    },
                  }}
                >
                  <Box
                    // bgGradient="linear(to-r, teal.300, blue.800)"
                    bgGradient="linear(to-r, teal.400, teal.500)"
                    bgClip="text"
                    display="inline"
                  >
                    {item}
                  </Box>

                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display={{base: 'block', lg: 'none'}}>
          <IconButton
            icon={<HamburgerIcon boxSize={8} />}
            variant="unstyled"
            color="white"
            aria-label="Open menu"
            onClick={onOpen}
          />
        </Box>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="primary.500">
            <DrawerCloseButton mt={4} mr={4} color="white" />
            <DrawerBody
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Stack
                bgGradient="linear(to-r, black, #080808)"
                display={'flex'}
                flexDirection={'column'}
                h={'full'}
                w={'full'}
                alignItems={'center'}
                gap={'2rem'}
                justifyContent={'center'}
              >
                {[
                  'About',
              
                  'Experience',
            
                  'Skills',
                  'Services',
                  'Portfolio',
                  'Apps',
                     'Education',
             
                  'Contact',
                ].map (item => (
                  <Box key={item}>
                    <Link
                      onClick={() => {
                        triggerNavItem (`#${item.toLowerCase ()}`);
                        onClose ();
                      }}
                      cursor="pointer"
                      fontWeight="medium"
                      fontSize="lg"
                      color="white"
                      _hover={{textDecoration: 'underline'}}
                    >
                      {item}
                    </Link>
                  </Box>
                ))}
              </Stack>

            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

    </Box>
  );
};

export default Navbar;
