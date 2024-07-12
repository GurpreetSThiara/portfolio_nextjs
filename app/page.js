
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@components/hero";
import { Box } from "@chakra-ui/react";
import MyInfo from "@components/profileInfo";
import Skills from "@components/skills";
import Services from "@components/services";
import Portfolio from "@components/portfolio";
import ContactForm from "@components/Contact";


export default function Home() {

  
  return (
    <main >
    
      <Box py={'1rem'}>
      <Hero/>
      <MyInfo/>
      <Skills/>
      <Services/>
      <Portfolio/>
      </Box>
      <ContactForm/>
  
     
    </main>
  );
}
