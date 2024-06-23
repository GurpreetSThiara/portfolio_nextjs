"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import shopAdmin from './../public/react/shopSphere/15.webp';

import { useRouter } from 'next/navigation';
import shopHome from './../public/react/shopSphere/9.webp';
import shopMap from './../public/react/shopSphere/10.webp';
import userShopMap from './../public/react/shopSphere/2.webp';
import Link from 'next/link';

const Project = ({ name,images, title, description, techStack,link }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleClick = () => {
    if (router) {
      router.push(`/views/react/${name}`);
    }
  };



  return (
    <Flex
      as={motion.div}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      gap={"0.75rem"}
      flexDirection={"column"}
      ref={ref}
      bg={"#002145"}
      p={"1rem"}
      m={"0.5rem"}
      boxShadow="2xl"
      borderRadius={"lg"}
    >
     <Flex alignItems={'center'} justifyContent={'space-between'}>
     <Text
     textAlign={{base:'center',md:''}}
        as={motion.h1}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        fontWeight="semibold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        {title}
      </Text>
   
      <Flex display={{ base: "none", md: "flex" }}   as={motion.div}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}>
        <Button onClick={handleClick} _hover={{backgroundColor:'gray.800'}}  size='lg' bg={"black"} rounded={"full"} color={"white"}>
          Show more
        </Button>
      </Flex>
     </Flex>

     <Box       as={motion.a}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }} textAlign={'center'}> {link &&  <Link legacyBehavior href="https://freeresumebuilder.vercel.app" passHref>
      
      <a target="_blank" rel="noopener noreferrer">
      https://freeresumebuilder.vercel.app
      </a>
    </Link>}</Box>
      <Text
      textAlign={'justify'}
        as={motion.p}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {description}
      </Text>
      <Flex flexDirection={'column'}  gap={{base:'0.5rem',md:""}}>
        {techStack.map((tech) => {
          return (
            <Flex key={tech.title} gap={{base:'',md:"0.5rem"}} flexDirection={{base:'column',md:'row'}}>
              <Text
                as={motion.h1}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                fontSize={{ base: "1xl", sm: "2xl", lg: "2xl" }}
                fontWeight="semibold"
                fontFamily="heading"
              >
                {tech.title + ":"}{" "}
              </Text>
              <Text
                as={motion.h1}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                fontSize={{ base: "1xl", sm: "2xl", lg: "2xl" }}
              >
                {tech.value}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      {isClient && (
        <Box>
          <AliceCarousel
            mouseTracking
            autoPlay
            autoPlayInterval={2000}
            responsive={responsive}
            infinite
            disableButtonsControls
            items={images.map((image, index) => (
              <Box
                p="1rem"
                key={image.title}
                borderRadius="md"
                boxShadow="md"
                overflow="hidden"
              >
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        delay: 0.5 * index,
                      },
                    },
                  }}
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <Image
                    src={image.img}
                    width={500}
                    height={300}
                    alt={image.title}
                    layout="responsive"
                  />
                </motion.div>
                <motion.h1
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.3 },
                    },
                  }}
                  style={{
                    marginTop: "1rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {image.title}
                </motion.h1>
                <motion.p
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.5 },
                    },
                  }}
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "1rem",
                    color: "#666",
                  }}
                >
                  {image.description}
                </motion.p>
              </Box>
            ))}
          />
        </Box>
      )}

    
      <Button
        display={{ base: "flex", md: "none" }}
        bg={"black"}
        rounded={"full"}
        color={"white"}
      >
        Show more
      </Button>
    </Flex>
  );
};

export default Project;
