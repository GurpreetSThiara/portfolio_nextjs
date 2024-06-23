"use client"
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/navigation';

const CustomButton = ({}) => {
    const router = useRouter();
    const handleClick = () => {
        if (router) {
          router.push(`/views/react/s}`);
        }
      };
  return (
    <Button onClick={handleClick} _hover={{backgroundColor:'gray.800'}}  size='lg' bg={"black"} rounded={"full"} color={"white"}>
    Show more
  </Button>
  )
}

export default CustomButton
