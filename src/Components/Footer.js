
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BsFacebook } from "react-icons/bs";
import { AiFillSmile, AiFillInstagram, AiFillTwitterCircle, AiOutlineGoogle, AiFillLinkedin,AiFillHome,AiTwotonePhone ,AiFillPrinter,AiTwotoneMail} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <MDBFooter bgColor='dark' style={{marginTop:"50px"}} className='text-white text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{fontWeight:"bold",marginLeft:"50px"}}>Connectez-vous avec nous sur les réseaux sociaux :</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <BsFacebook className='me-4 text-white' style={{ fontSize: "30px" }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiFillInstagram className='me-4 text-white' style={{ fontSize: "30px" }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiFillTwitterCircle className='me-4 text-white' style={{ fontSize: "30px" }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiOutlineGoogle className='me-4 text-white' style={{ fontSize: "30px" }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiFillLinkedin className='me-4 text-white' style={{ fontSize: "30px" }} />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <div >
                <img src='LOGOFOTER.png' alt='' style={{  width:"150px",
                                                          height:"50px",
                                                          borderRadius:"20px",
                                                          marginBottom:"30px"
                                                  }}/>
              </div>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Les Horaires</h6>
              <p>
                <p className='text-reset'>
                Lun 8:30 - 6:30
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                Mar 8:30 - 6:30
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                Mer 8:30 - 6:30
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                 Jeu Ven 8:30 - 6:30
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                Sam Dim Fermé
                </p>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <AiFillHome  className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <AiTwotoneMail className="me-3" />
                preté@gmail.com
              </p>
              <p>
                <AiTwotonePhone className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <AiFillPrinter  className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 WFT205 :
        <a className='text-reset fw-bold' href='https://puretéPro.com/'>
          puretéPro.com
        </a>
      </div>
    </MDBFooter>
  );
}