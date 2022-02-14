import React from "react"
import Hero from '../components/Hero/Hero'
import SixStroies from "../components/SixStories/SixStroies"
import Stories from "../components/Stories/Stories"
import {NavBar} from "../components/Header/Navbar"
import CurrentProject from "../components/CurrentProjects/CurrentProjects"
import SaveTheWorld from "../components/SaveTheWorld/SaveTheWorld"
import SaveTheWorld2 from "../components/SaveTheWorld2/SaveTheWorld2"
import Footer from "../components/Footer/Footer"
import { Box } from "theme-ui"

export default function Home() {
  return (
  <Box style={{width:"100%"}}>
    <NavBar />
    <Hero />
    <Stories/> 
    <SixStroies/>
    <CurrentProject/>
    <SaveTheWorld/>
    <SaveTheWorld2/>
    <Footer/>
  </Box>)
}
