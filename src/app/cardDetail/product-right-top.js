
'use client';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { Paper, Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductRightTop = () => {
  const product = {
    title: 'Tasche Steeple 25',
    price: 259,
    kimizi: {
      images: [
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-1-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-3-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-4-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-5-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-6-0-0-800-800_g.webp",
      ],
    },
    karmizi: {
      images: [
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-1-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-3-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-4-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-5-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-6-0-0-800-800_g.webp",
      ],
    },
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const renderThumbs = () =>
    selectedImageIndex === 0
      ? product.kimizi.images.map((image, index) => (
          <div key={index} className='flex justify-center items-center' style={{ width: '100px', height: 'auto', border: 'none' }}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: '100%', height: 'auto', outline: 'none' }}
            />
          </div>
        ))
      : product.karmizi.images.map((image, index) => (
          <div key={index} className='flex justify-center items-center' style={{ width: '100px', height: 'auto', border: 'none' }}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: '100%', height: 'auto', outline: 'none' }}
            />
          </div>
        ));

  const responsiveSettings = [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ];

  return (
    <Container className='flex-col bg-[#F6F1EB]'>
      <Row className=''>
        <Col lg={8} className=''>
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={true}
            infiniteLoop={false}
            dynamicHeight={true}
            renderThumbs={renderThumbs}
            thumbWidth={100}
            thumbHeight={60}
            thumbOpacity={1}
            selectedItem={selectedImageIndex}
            stopOnHover={true}
            autoPlay={true}
            responsive={responsiveSettings}
          >
            {selectedImageIndex === 0
              ? product.kimizi.images.map((image, index) => (
                  <div key={index}>
                    <Paper>
                      <Box>
                        <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                      </Box>
                    </Paper>
                  </div>
                ))
              : product.karmizi.images.map((image, index) => (
                  <div key={index}>
                    <Paper>
                      <Box>
                        <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                      </Box>
                    </Paper>
                  </div>
                ))}
          </Carousel>
        </Col>
        <Col lg={4} className='bg-white'>
          <div className='border-b-2 border-gray-100 font-mono pt-2 font-semibold '>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>

          <div className='flex justify-between gap-5 border-b-2 border-gray-100 py-2 font-mono text-sm'>
            <span>COLOUR</span>
            <span></span>
          </div>

          <div className='flex gap-3 border-b-2 border-gray-100 py-2'>
            <img
              src={product.kimizi.images[0]}
              width={50}
              height={50}
              style={{
                borderBottom: selectedImageIndex === 0 ? '2px solid black' : 'none',
              }}
              onClick={() => handleImageClick(0)}
            />
            <img
              src={product.karmizi.images[0]}
              width={50}
              height={50}
              style={{
                borderBottom: selectedImageIndex === 1 ? '2px solid black' : 'none',
              }}
              onClick={() => handleImageClick(1)}
            />
          </div>

          <div className='flex justify-center items-center gap-3 border-b-2 border-gray-100 py-3'>
            <Button className='px-5' variant='dark'>
              Add to Cart
            </Button>
          </div>

          <div className='flex justify-center items-center gap-3 border-gray-100 py-3'>
            <p className='text-sm'>
              Bag in Toile H Plume with "Clic Clac Panoplie Équestre" motif and Swift calfskin, jewelry with silver and palladium plating, removable fabric base, large flat inner pocket on the back, D-ring attachment, handles inspired by a rider's crop, talisman in the shape of a stirrup
              <br />
              <br />
              Made in France
              <br />
              <br />
              Dimensions: L 25 x H 23 x D 15 cm
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductRightTop;
