import Link from 'next/link';
import React from 'react';
import { ButtonGroup, Col, Container, InputGroup, ModalFooter, Row, Form, Button } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsMailbox, BsTwitter, BsYoutube } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='d-flex justify-content-center font-mono'>
      <ModalFooter className='footer' /* Added footer class for styling */>
        <Container className='p-4'>
          <section className='mb-7 text-center'>
            <h3 className='mb-4 font-semibold'>Continuons la conversation</h3>
            <p className='fw-light'>
              Recevez notre newsletter et découvrez nos histoires, nos collections et nos surprises.
            </p>
          </section>
          <section className=''>
            <form action=''>
              <Row className='d-flex justify-content-center'>
                <Col xs='auto' className='pt-2'>
                  {/* Added xs='auto' to adjust the column width on smaller screens */}
                </Col>
                <Col md='7' xs={12} /* Added xs={12} to make the column full width on smaller screens */>
                  <InputGroup className='mb-3'>
                    <InputGroup.Text id='basic-addon1'>
                      <BsMailbox />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder='Email'
                      aria-label='Username'
                      aria-describedby='basic-addon1'
                    />
                    <Button variant='dark'>S'inscrire</Button>
                  </InputGroup>
                </Col>
                <Col xs='auto' className='pt-2'>
                  {/* Added xs='auto' to adjust the column width on smaller screens */}
                </Col>
              </Row>
            </form>
          </section>
          <section className=''>
            <Row className='mt-5'>
              <Col lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase font-semibold'>Services</h5>

                <ul className='list-unstyled mb-0'>
                  <li className='mb-3 mt-3'>
                    <a href='#!' className='text-black no-underline'>
                      Offrir un cadeau
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Questions fréquentes
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Trouver un magasin
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Points de vente proposant la beauté
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Nous contacter
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Le Sur-mesure
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Lentretien et la réparatin
                    </a>
                  </li>
                </ul>
              </Col>

              <Col lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase font-semibold'>Commandes</h5>

                <ul className='list-unstyled mb-0'>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Paiement
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Livraison
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Retrait en magasin
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Suivi de Commandes
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Retour er echange
                    </a>
                  </li>
                </ul>
              </Col>

              <Col lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase font-semibold'>La Maison Hermès</h5>

                <ul className='list-unstyled mb-0'>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Développement durable
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      La Fondation d'entreprise Hermès
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Rejoindre Hermès
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Finance & Gouvernance
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Nos maisons partenaires
                    </a>
                  </li>
                </ul>
              </Col>

              <Col lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase font-semibold'>Mentions légales</h5>

                <ul className='list-unstyled mb-0'>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Conditions générales de vente
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Conditions générales d'utilisation
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Données personnelles
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Cookies
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Règles dentreprise contraignantes (BCR)
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href='#!' className='text-black no-underline'>
                      Mentions légales
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </section>
          <section className='text-center mt-5'>
            <ButtonGroup>
              <Button variant='link' href='#!'>
                <BsFacebook size={24}  color='black'/>
              </Button>
              <Button variant='link' href='#!'>
                <BsInstagram size={24}  color='black' />
              </Button>
              <Button variant='link' href='#!'>
                <BsTwitter size={24}  color='black' />
              </Button>
              <Button variant='link' href='#!'>
                <BsYoutube size={24} color='black'/>
              </Button>
            </ButtonGroup>
          </section>
          <section className='text-center mt-3'>
            <p className='text-black mb-0'>© 2023 Auto Bag</p>
            <p className='text-black mb-0'>PREPARED BY</p>
            <Link href='https://github.com/yavuzce'><p className='text-black mb-0'>Yavuz Selim CELIK</p></Link>
            <Link href='https://github.com/kamuranozkan'><p className='text-black mb-0'>Kamuran OZKAN</p></Link>
            <Link href='https://github.com/Hldka'><p className='text-black mb-0'>A.Halide KARADAG</p></Link>
            <Link href='https://github.com/fatiharzu'><p className='text-black mb-0'>Fatih ARZU</p></Link>
            <Link href='https://github.com/eozkanch'><p className='text-black mb-0'>Ebubekir OZKAN</p></Link>
         

          </section>
        </Container>
      </ModalFooter>
    </div>
  );
};

export default Footer;

