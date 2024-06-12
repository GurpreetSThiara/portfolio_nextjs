"use client";
import { Box, Flex, Heading, Text, Link, Icon } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import name from "./../public/bg-hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      p={0}
      m={0}
      position="relative"
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        h={"100vh"}
        overflow={"hidden"}
        w={"full"}
        position={"absolute"}
        zIndex={-1}
        opacity={0.1}
      >
        <Image src={name} alt={""} layout="fill" objectFit="cover" />
      </Box>
      <Box className="absolute inset-0 z-20 gradient-overlay" />

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box pt={{ base: 8, sm: 10, lg: 0 }} pl={{ lg: 8 }}>
          <Heading
            textAlign={{ base: "center", sm: "left" }}
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            fontFamily="heading"
            color="white"
          >
           {` Hello I'm Gurpreet Singh!`}
          </Heading>
          <Text
            pt={{ base: 6, sm: 8, lg: 3 }}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            fontFamily="heading"
            fontWeight="medium"
            color="white"
            textAlign={{ base: "center", sm: "left" }}
          >
            Full Stack Web & App Developer
          </Text>
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            pt={{ base: 3, sm: 5 }}
          >
            <Flex
              alignItems="center"
              justifyContent={{ base: "center", sm: "flex-start" }}
            >
              <Text
                fontSize="lg"
                textTransform="uppercase"
                color="white"
                fontFamily="body"
              >
               {`Let's connect`}
              </Text>
              <Box display={{ base: "none", sm: "block" }}>
                <Icon as={BsChevronRight} boxSize={8} color="yellow.400" />
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent={{ base: "center", sm: "flex-start" }}
              pt={{ base: 5, sm: 0 }}
              pl={{ sm: 2 }}
            >
              <Box pr={4}>
                <Link href="/" _hover={{ color: "yellow.400" }}>
                  <Icon as={AiFillLinkedin} boxSize={8} color="white" />
                </Link>
              </Box>
              <Box pr={4}>
                <Link href="/" _hover={{ color: "yellow.400" }}>
                  <Icon as={AiFillTwitterCircle} boxSize={8} color="white" />
                </Link>
              </Box>
              <Box pr={4}>
                <Link href="/" _hover={{ color: "yellow.400" }}>
                  <Icon as={AiFillInstagram} boxSize={8} color="white" />
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
