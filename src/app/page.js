'use client';


import React from 'react'
import CustomNavbar from '../app/components/01-navbar/customnavbar'
import Shop from '../app/components/04-productList/shop'
import Header from '../app/components/04-productList/header';
import { Container } from 'react-bootstrap';
import Footer from './components/footer/footer';


const Home = () => {
  return (
    <div  className='bg-[#F6F1EB]'>
 <Container fluid className=' bg-[#rgb(155, 116, 68)]'><CustomNavbar/></Container>
 <div className=' bg-white '><Header/></div>
<div className=' bg-[#rgb(196, 148, 89)]' ><Shop/></div>
<div className=' bg-[#rgb(196, 148, 89)] mt-5 pt-5' ><Footer/></div>

   
    </div>
  )
}

export default Home