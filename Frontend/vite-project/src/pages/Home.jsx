import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Resevation from '../components/Resevation'
import Footer from '../components/Footer'
import CustomerService from '../components/CustomerService'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About />

    <Qualities />
    <Menu />
    <WhoAreWe />
    <Team />
    <Resevation />
    <Footer />
    
      
    </>
  )
}

export default Home
