"use client"
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
const ReactProjects = () => {

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
    <Box ref={ref}  mt={'7rem'} p={'1rem'}>
      <Heading   as={motion.h1}
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
        textTransform="uppercase">
        ReactJS Projects
      </Heading>
    </Box>
  )
}

export default ReactProjects
