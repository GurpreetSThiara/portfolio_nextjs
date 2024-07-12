'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  keyframes,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';
import shopHome from './../public/react/shopSphere/9.webp';
import shopAdmin from './../public/react/shopSphere/15.webp';
import shopMap from './../public/react/shopSphere/10.webp';
import userShopMap from './../public/react/shopSphere/2.webp';
import f1 from './../public/react/frb/1 (5).webp';
import f2 from './../public/react/frb/2 (4).webp';
import f3 from './../public/react/frb/3 (3).webp';
import f4 from './../public/react/frb/5 (2).webp';

import Image from 'next/image';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const handleClick = () => {
      if (router) {
        router.push("/views/react");
      }
    };
 

  return (
    <Box m={0} id='portfolio' ref={ref} bgGradient="linear(to-r,black, black,blue.900);">
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
      
        >
          ReactJS
        </Text>
        <Flex justifyContent={'center'} onClick={handleClick}>
        <Text
        cursor={'pointer'}
        _hover={{
          borderBottom:'2px solid #002244'
        }}
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
          fontSize={{base: 'xl', sm: 'xl', lg: 'xl'}}
         
          fontFamily="heading"

        >
          View all Reactjs Projects
        </Text>
        </Flex>
        <Project
        name={'frb'}
        techStack={[{title:'Front end', value:'Reactjs, Chakra UI, javasctipt'}]}
          title={'Free Resume Builder'}
          link={'https://freeresumebuilder.vercel.app'}
          description={
            'Create professional resumes effortlessly with our user-friendly ReactJS-based resume builder. Customize templates, preview in real-time, and export your resume as a selectable text PDF using jsPDF. Enjoy seamless drag-and-drop functionality to  ensure a smooth resume-building experience'
          }
          images={[
            {title: 'HomePage', description: 'homepage', img: f1},
            {title: 'Resume editor', description: 'resume editor', img: f2},
            {title: 'Resume templates', description: 'all the resume templates', img: f3},
            {title: 'Resume description', description: 'template description in detail', img: f4},
          ]}
        />
        <Project
        name={'shopSphere'}
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
