import { Box, Heading, Grid, List, ListItem } from "@chakra-ui/react";

// Data for skills
const skillsData = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "C/C++", "Java", "Python"]
  },
  {
    title: "Front End Development",
    items: ["HTML & CSS", "ReactJs", "JavaScript"]
  },
  {
    title: "Back End Development",
    items: ["Express JS", "Node.js", "Spring java"]
  },
  {
    title: "Mobile Development",
    items: ["Flutter", "Firebase"]
  },
  {
    title: "DevOps",
    items: ["Docker", "Git", "NoSQL"]
  },
  {
    title: "IDE's",
    items: ["Visual Studio code", "Android Studio", "Pycharm", "Atom"]
  }
];

const Skills = () => {
  return (
    <Box
      bg="black"
      color="white"
      p={6}
      rounded="lg"
      shadow="lg"
      
     
    >
      <Heading
        textAlign="center"
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        fontWeight="semibold"
        fontFamily="heading"
        textTransform="uppercase"
        mb={8}
      >
        My Skills
      </Heading>
      <Grid
        gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
        gap={6}
      >
        {skillsData.map((skill, index) => (
          <Box key={index}  shadow="md" rounded="md" bgGradient="linear(to-r,,#002244, black);" p={4}>
            <Heading fontSize="2xl" fontWeight="semibold" mb={4}>{skill.title}</Heading>
            <List>
              {skill.items.map((item, idx) => (
                <ListItem key={idx} mb={2}>{item}</ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
