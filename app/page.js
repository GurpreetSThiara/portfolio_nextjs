
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@components/hero";
import { Box, Flex } from "@chakra-ui/react";
import MyInfo from "@components/profileInfo";
import Skills from "@components/skills";
import Services from "@components/services";
import Portfolio from "@components/portfolio";
import ContactForm from "@components/Contact";
import Apps from "@components/apps";
import Education from "@components/education";


export default function Home() {

  
  return (
    <main >
    
      <Flex flexDirection={'column'} py={'1rem'} gap={0}>
      <Hero/>
      <MyInfo/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Apps/>
      <Education/>
      </Flex>
      <ContactForm/>
  
     
    </main>
  );
}
