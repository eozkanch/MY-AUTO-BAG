'use client'; 

import React from 'react';
import { Container} from 'react-bootstrap';

const ProductLeftBottom = () => {
  return (
    <Container className="flex justify-center items center bg-[#fffffe] p-5">
      <div>
        <div  className="text-center text-xl font-sans">
          <h1>The story behind</h1>
        </div>
        <div  className="text-center mt-3">
          <p className="font-mono text-l">
          Blending canvas and leather, the Steeple cabas bag evokes Hermès' equestrian history with playful details: the two-tone bag features handles in the shape of a rider's whip and a stirrup-shaped bag accessory. A functional and joyful gesture, designed to be worn on the arm or wrist for everyday use.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProductLeftBottom;