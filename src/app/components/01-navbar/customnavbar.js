import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { BsSearch, BsBag } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CustomNavbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleOffcanvasClick = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <Navbar expand="xl" className="flex bg-[#F6F1EB]">
      <Nav className="flex justify-start items-center">
        <Nav.Link onClick={handleOffcanvasClick}>
          <div className="flex items-center gap-3">
            <AiOutlineMenu color="black" size={25} className="menuIcon" />
            <span className="hidden lg:block">Menu</span>
          </div>
        </Nav.Link>
        <Form inline className="ml-3">
          <div className="relative hidden lg:block">
            <FormControl
              type="text"
              placeholder="Search"
              className={`mr-sm-2 ${isSearchExpanded ? 'hidden' : 'lg:block'}`}
              onClick={handleSearchClick}
            />
            {isSearchExpanded ? (
              <AiOutlineClose
                className="searchIcon absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={handleSearchClick}
              />
            ) : (
              <BsSearch
                className="searchIcon absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={handleSearchClick}
              />
            )}
          </div>
        </Form>
      </Nav>
      <Nav className="mx-auto flex justify-center">
        <Navbar.Brand href="#home">
          <Image src="/images/logo.gif" width={55} height={50} className="rounded-circle" />
        </Navbar.Brand>
      </Nav>
      <Nav className="flex  gap-3">
        <div href="/login" className="flex gap-2">
          <FaUser color="black" size={20} className="userIcon" /> <span className="hidden lg:block">Account</span>
        </div>
        <div href="/profile" className="flex  gap-2">
          <BsBag color="black" size={20} className="cartIcon" /> <span className="hidden lg:block">Cart</span>
        </div>
      </Nav>    

      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClick} placement="start" className="bg-[#F6F1EB]">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='font-mono'>AUTO BAG</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='font-mono'>
            <li>
              <a className="text-black no-underline" href="#">Home</a>
            </li>
            <li>
              <a className="text-black no-underline" href="#">Contact Us</a>
            </li>
            <li>
              <a className="text-black no-underline" href="#">About Us</a>
            </li>
            <li>
              <a className="text-black no-underline" href="#">Products</a>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a className="text-black no-underline" href="#">Send</a>
            </li>
            <li>
              <a className="text-black no-underline" href="#">Share</a>
            </li>
            <li>
              <a className="text-black no-underline" href="#">Settings</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;

