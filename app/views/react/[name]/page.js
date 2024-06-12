import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

const ReactProjects = () => {
  // Import all images dynamically
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('./../../../../public/react/shopSphere/', false, /\.(webp)$/));

  return (
    <Box mt={'9rem'}>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4}>
        {images.map((image, index) => (
          <Image key={index} src={image.default} alt={`Image ${index + 1}`} width={400} height={400} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ReactProjects;
