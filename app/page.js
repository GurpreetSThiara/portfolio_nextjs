
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@components/hero";
import { Box } from "@chakra-ui/react";
import MyInfo from "@components/profileInfo";
import Skills from "@components/skills";
import Services from "@components/services";
import Portfolio from "@components/portfolio";


export default function Home() {

  
  return (
    <main >
    
      <Box p={'1rem'}>
      <Hero/>
      <MyInfo/>
      <Skills/>
      <Services/>
      <Portfolio/>
      </Box>
  
     
    </main>
  );
}
