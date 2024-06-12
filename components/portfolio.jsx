'use client';

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  keyframes,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';
import shopHome from './../public/react/shop/shopHome.png';
import shopAdmin from './../public/react/shop/shopadmin.png';
import shopMap from './../public/react/shop/shopmap.png';
import userShopMap from './../public/react/shop/userShopMap.png';

import Image from 'next/image';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Project from './project';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Portfolio = () => {
  console.log (shopHome);
  const {ref, inView} = useInView ({triggerOnce: true, threshold: 0.1});
  const controls = useAnimation ();

  React.useEffect (
    () => {
      if (inView) {
        controls.start ('visible');
      }
    },
    [controls, inView]
  );

  return (
    <Box ref={ref} bgGradient="linear(to-r,black, black,blue.900);">
      <Heading
        as={motion.h1}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
        }}
        textAlign="center"
        fontSize={{base: '4xl', sm: '5xl', lg: '6xl'}}
        fontWeight="semibold"
        fontFamily="heading"
        textTransform="uppercase"
        mb={8}
      >
        My Portfolio
      </Heading>
      <Box>
        <Text
          as={motion.h2}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {opacity: 0, y: 20},
            visible: {
              opacity: 1,
              y: 0,
              transition: {duration: 0.6, delay: 0.3},
            },
          }}
          textAlign="center"
          fontSize={{base: '3xl', sm: '4xl', lg: '5xl'}}
          fontWeight="semibold"
          fontFamily="heading"
          textTransform="uppercase"
          mb={8}
        >
          ReactJS
        </Text>
        <Project
        techStack={[{title:'Front end', value:'Reactjs, Redux, Material UI,Tailwind'},{title:'backend',value:'Spring boot, java, mysql'}]}
          title={'ShopSphere a Ecommerce App'}
          description={
            'ShopSphere is here to make shopping local easier than ever. Our platform allows you to open your own online store and connect with customers right in your area. Whether you’re a seasoned shop owner or just starting out, ShopSphere helps you showcase your products and services to your community.'
          }
          images={[
            {title: 'HomePage', description: 'homepage for the user end', img: shopHome},
            {title: 'Admin Home', description: 'homepage for an admin/seller', img: shopAdmin},
            {title: 'Map', description: 'users can view nearby shops on map', img: shopMap},
            {title: 'Shop', description: 'users can view the shop locations', img: userShopMap},
          ]}
        />

        {/* <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          <Box
            as={motion.div}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.5 } }
            }}
            w="full"
            overflow="hidden"
          >
            <Image src={shopHome} alt="Shop Home" layout="responsive" />
          </Box>
          <Box
            as={motion.div}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.7 } }
            }}
            w="full"
            overflow="hidden"
          >
            <Image src={shopAdmin} alt="Shop Admin" layout="responsive" />
          </Box>
          <Box
            as={motion.div}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.9 } }
            }}
            w="full"
            overflow="hidden"
          >
            <Image src={shopMap} alt="Shop Map" layout="responsive" />
          </Box>
        </SimpleGrid> */}
      </Box>
    </Box>
  );
};

export default Portfolio;
