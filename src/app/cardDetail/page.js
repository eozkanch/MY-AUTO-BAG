'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductLeftBottom from './product-left-bottom';
import ProductRightTop from './product-right-top';
import ProductRightBottom from './product-right-bottom';


import { BsArrowLeft } from 'react-icons/bs';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';






const ProductDetail = () => {
  return (
    <div className="  bg-[#F6F1EB]">
    <Container  >
      <Row className="pt-5">
      <Link className="" href='/'>
        <div className="flex start items-bottom ">
       
          <BsArrowLeft className="text-2xl text-black no-underline " />
         <span className="text-black no-underline ps-2">Zurück</span>
        </div>
        </Link>
         <ProductRightTop />
         </Row>
         <Row className="">
         <Col lg={8} md={12} className="py-5">
     
            <ProductLeftBottom />
        
        </Col>
        <Col lg={4} md={12} className="py-5">
          
          <ProductRightBottom />
          </Col>
          
      </Row>
    </Container>
  </div>
    
  
  );
};

export default ProductDetail;
