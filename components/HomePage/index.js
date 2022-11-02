import React, { Fragment } from 'react'
import Header from '../modules/Header'
import AboutUs from './AboutUs'
import College from './College'
import Communication from './Communication'
import Footer from './Footer'
import Hero from './Hero'
import HomeProduct from './HomeProduct'
import HomeServices from './HomeServices'
import HomeTeam from './HomeTeam'
import Offices from './Offices'
import Position from './Position'
import Prefooter from './Prefooter'
import Tech from './Tech'

function HomePage() {
  return (
    <Fragment>
    <Header/>
    <Hero/>
    <HomeProduct/>
    <HomeServices/>
    <HomeTeam/>
    <Communication/>
    <AboutUs/>
    <College/>
    <Position/>
    <Offices/>
    <Tech/>
    <Prefooter/>
    <Footer/>
    </Fragment>
  )
}

export default HomePage