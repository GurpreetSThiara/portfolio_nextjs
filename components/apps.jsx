import { Box, Button, Text, Link, VStack } from "@chakra-ui/react";

const Apps = () => {
  return (
    <Box
     id='apps'
    m={0}
      p={6}
     
      borderRadius="md"
      boxShadow="md"
      bg="black"
      color="white"
      textAlign="center"
    >
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Explore My Apps
        </Text>
        <Text>
          Check out my apps listed on the Play Store for exciting features and functionality.
        </Text>
        <Link href="https://play.google.com/store/apps/developer?id=Gurpreet+Singh+Thiara" isExternal>
          <Button
            backgroundColor="#002244"
            size="lg"
            variant="solid"
            _hover={{ bg: "blue.900" }}
          >
            View on Play Store
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Apps;
