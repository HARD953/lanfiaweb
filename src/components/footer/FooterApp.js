import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect,useState } from 'react';

import './FooterApp.css';



export default function FooterApp() {

  const [pathname,setPathname] = useState('')

  let location = useLocation();

  useEffect(()=>{
        
    let locationPathName = location?.pathname
    setPathname(locationPathName)

},[location?.pathname])


  return (
    <MDBFooter className={`text-center bg-dark-3 footer-app ${pathname ==="/redirect" && "d-none" } `} color='white' >
      <MDBContainer className='p-4'>
      
        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='/'>
          Lanfiatech
        </a>
      </div>
    </MDBFooter>
  );
}