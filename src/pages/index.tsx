import React, { useEffect, useState } from "react"
import Hero from '../components/Hero/index'
import SixStroies from "../components/SixStories/SixStroies"
import Stories from "../components/Stories/Stories"
import {NavBar} from "../components/Header/Navbar"
import CurrentProject from "../components/CurrentProjects/CurrentProjects"
import SaveTheWorld from "../components/SaveTheWorld/SaveTheWorld"
import SaveTheWorld2 from "../components/SaveTheWorld2/SaveTheWorld2"
import Footer from "../components/Footer/Footer"
import Signin from "../components/Modal/signin"
import { Box } from "theme-ui"
import SearchBar from "../components/SearchBar/SearchBar"

export default function Home() {
  
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
  if(typeof window !== undefined){    
    const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  
    }}, []);

  return (
  <Box style={{width:"100%"}}>
    {/* <NavBar offset={offset} /> */}
    <Hero />
    <Box style={{marginTop:"-100px"}}>
    <SearchBar/>
    </Box>
   <Stories/> 
    <SixStroies/>
    <CurrentProject/>
    <SaveTheWorld/>
    <SaveTheWorld2/>
    <Footer/>
          </Box> 
  )
}