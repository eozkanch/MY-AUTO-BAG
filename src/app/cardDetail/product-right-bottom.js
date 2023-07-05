'use client'

import React from 'react';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductRightBottom = () => {
  return (
    <div className=' bg-white'>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Care Instructions</Typography>
        </AccordionSummary>
        <div className='font-serif text-xs ms-3 my-2'>
          <p>This way, you ensure the long-term protection of your Hermès leather.</p> 
        </div>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Delivery</Typography>
        </AccordionSummary>
        <div className='font-serif text-xs ms-3 my-2'>
          <li>Delivered by FedEx within 3 to 4 business days</li>
          <li>Pick up from the boutique within 3 to 4 business days</li>
          <li>Free shipping</li>
        </div>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Payment Method</Typography>
        </AccordionSummary>
        <div className='font-serif text-xs ms-3 my-2'>
          <li>With card: Visa®, MasterCard®, Maestro®, and American Express®</li>
          <li>Secure card payment with Verified by Visa®, MasterCard® SecureCode, and American Express SafeKey®</li>
        </div>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography>Returns and Exchanges</Typography>
        </AccordionSummary>
        <div className='font-serif text-xs ms-3 my-2'>
          <li>Easy and free within 30 days</li>
        </div>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography>For Gifting</Typography>
        </AccordionSummary>
        <div className='font-serif text-xs ms-3 my-2'>
          <li>All orders are delivered in an orange box with a Bolduc ribbon</li>
        </div>
      </Accordion>
    </div>
  )
}

export default ProductRightBottom;