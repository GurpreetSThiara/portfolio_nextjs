import { Box, Container, Flex, Heading, Text, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitter, FaDribbble, FaLinkedin, FaInstagram } from "react-icons/fa";

const MyInfo = () => {
  return (
    <Box w="full" display="flex" justifyContent="center" alignItems="center" id="about" bg={'#000'}>
      <Container maxW="container.lg" py={{ base: 16, md: 20 }} display="flex" flexDirection={{ base: "column", lg: "row" }} justifyContent="center" alignItems="center">
        <Flex flexDirection="column" textAlign={{ base: "center", lg: "left" }} alignItems="center" lg={{ flex: 3/4 }}>
          <Heading as="h2" fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }} fontWeight="semibold" textTransform="uppercase">
            Who am I?
          </Heading>
          <Heading as="h4" pt={6} fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }} fontWeight="medium" color="gray.200">
            {`I'm Gurpreet Singh, a Full Stack Web & App Developer`}
          </Heading>
          <Text pt={6} textAlign="justify" fontSize={{ base: "md", sm: "lg", lg: "xl" }} color="gray.200" lineHeight="tall">
           {` Hey there! I'm a Full Stack Developer at Kreativan Technologies, located in Chandigarh, India.
            I absolutely love what I do – building cool stuff on the web and mobile platforms. At Kreativan
            Technologies, I've had the opportunity to work on some exciting projects across various industries, from
            e-commerce to healthcare. Collaborating with my awesome teammates, I've helped bring ideas to life and
            delivered solutions that make a real impact. What Sets Me Apart: I'm not just another coder – I'm a
            problem solver, a team player, and a lifelong learner. I thrive on challenges, enjoy working with
            others, and always stay up-to-date with the latest tech trends. If you're looking for someone passionate
            about technology and dedicated to delivering top-notch solutions, I'm your person! Let's connect and
            create something awesome together.`}
          </Text>
          <Flex flexDirection={{ base: "column", sm: "row" }} alignItems="center" pt={6} w="full" justifyContent={{ sm: "start" }}>
            <Text fontSize="lg" fontWeight="semibold" textTransform="uppercase" color="gray.500">
              Connect with me
            </Text>
            <Stack direction="row" spacing={2} pt={{ base: 5, sm: 0 }} pl={{ sm: 2 }}>
              <Link href="/" isExternal>
                <IconButton icon={<FaFacebookSquare />} variant="ghost" fontSize="2xl" color="blue.500" _hover={{ color: "yellow.500" }} />
              </Link>
              <Link href="/" isExternal>
                <IconButton icon={<FaTwitter />} variant="ghost" fontSize="2xl" color="blue.500" _hover={{ color: "yellow.500" }} />
              </Link>
              <Link href="/" isExternal>
                <IconButton icon={<FaDribbble />} variant="ghost" fontSize="2xl" color="blue.500" _hover={{ color: "yellow.500" }} />
              </Link>
              <Link href="/" isExternal>
                <IconButton icon={<FaLinkedin />} variant="ghost" fontSize="2xl" color="blue.500" _hover={{ color: "yellow.500" }} />
              </Link>
              <Link href="/" isExternal>
                <IconButton icon={<FaInstagram />} variant="ghost" fontSize="2xl" color="blue.500" _hover={{ color: "yellow.500" }} />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MyInfo;
