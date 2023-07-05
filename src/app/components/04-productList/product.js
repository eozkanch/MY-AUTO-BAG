"use client"



import Link from "next/link";
import React from "react";
import { Card ,Carousel} from "react-bootstrap";


const Product = (props) => {
  const { title, price, img1, img2, img3 } = props;

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
   
  };

  return (
    <Card className="h-100 ">
  
      <Carousel>
        <Carousel.Item>
        <Card.Img
  src={`images/${img1}`}
  alt="First slide"
/>
        </Carousel.Item>
        <Carousel.Item>
        <Card.Img
  src={`images/${img2}`}
  alt="First slide"
/>
        </Carousel.Item>
        <Carousel.Item>
        <Card.Img
  src = {`images/${img3}`}
  alt="First slide"
/>
        </Carousel.Item>
      </Carousel>
      <Link href =  "/cardDetail" style={linkStyle} >
     
      <Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
       
        <Card.Title className=" font-mono fs-3 ">{title}</Card.Title> 
        <Card.Subtitle className=" font-semibold">{price}</Card.Subtitle>
      </Card.Body>
     
      </Link>
    </Card>
  );
};

export default Product;