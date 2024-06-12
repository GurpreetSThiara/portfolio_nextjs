"use client"
import { Box, Container, Heading, Grid, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import mobileIcon from "./../public/icon-mobile-white.svg";
import webIcon from "./../public/icon-development-white.svg";
import graphicsIcon from "./../public/icon-graphics-white.svg";

// Data for services
const servicesData = [
  {
    title: "WEB DEVELOPMENT",
    icon: mobileIcon,
    description: "We craft responsive and intuitive web applications tailored to your needs.",
  },
  {
    title: "Mobile Development",
    icon: webIcon,
    description: "From iOS to Android, we build native and cross-platform mobile apps.",
  },
  {
    title: "Web Design",
    icon: graphicsIcon,
    description: "Our designs blend creativity and functionality to elevate your online presence.",
  },
];

const Services = () => {
  return (
    <Box bg="black" py={{ base: 16, md: 20 }} id="services">
      <Container>
        <Heading
          textAlign="center"
          fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          fontWeight="semibold"
          fontFamily="header"
          textTransform="uppercase"
          mb={8}
        >
          Here's what I'm good at
        </Heading>
        <Heading
          textAlign="center"
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          fontWeight="medium"
          fontFamily="header"
          color="black"
          mb={10}
        >
          These are the services I offer
        </Heading>
        <Grid
          gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
            justifyContent="center"
        >
          {servicesData.map((service, index) => (
            <Flex
            flexDirection={'column'}
            alignItems={'center'}
             justifyContent="center"
            w={{base:'full',md:'20rem'}}
              key={index}
              bg="#0F0F0F"
              rounded="md"
              px={8}
              py={12}
              shadow="md"
              transition="background-color 0.3s ease"
              _hover={{ bg: "#002244" }}
              cursor="pointer"
              onClick={() => console.log(`${service.title} clicked`)} // Replace with actual action
            >
              <Box mx="auto" h={{ base: 24, xl: 28 }} w={{ base: 24, xl: 28 }} textAlign="center">
                <Image src={service.icon} alt={service.title} width={96} height={96} />
              </Box>
              <Box textAlign="center">
                <Heading pt={8} fontSize="lg" fontWeight="semibold" textTransform="uppercase" lg="xl">
                  {service.title}
                </Heading>
                <Text pt={4} fontSize="sm" color="gray.500" fontWeight="medium" lineHeight="tall" md="base">
                  {service.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
