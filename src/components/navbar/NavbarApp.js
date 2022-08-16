import React, { useState } from 'react';
import {IconButton } from 'rsuite';
import {NavLink, useNavigate} from "react-router-dom";
import MenuIcon from '@rsuite/icons/Menu';
import CloseIcon from '@rsuite/icons/Close';
import "./NavbarApp.css";


import logo from '../../assets/images/logo1.png';
import useToken from '../../hooks/useToken';

  const NavbarApp = (props) => {
    const [bgColor, setBgColor] = useState('nav-scroll-color');
    const [NavbarIconClick,setNavbarIconClick]= useState(false)
    const [userToken,setUserToken]= useState(false)

    const { token, deleteToken } = useToken();

    const navigate =  useNavigate()
    React.useEffect(() => {
      window.addEventListener("scroll", changeColor);
      return function cleanup() {
        window.removeEventListener("scroll", changeColor);
      };
  
    },[]);


    React.useEffect(() => {
    
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      setUserToken(userToken?.token)
  
    },[props.isLoadingRefresh]);

    const onClickLogout = ()=>{
        deleteToken()
        props.setIsLoadingRefresh(!props.isLoadingRefresh)
        navigate('/',{replace:true})
    }
    

 
    const changeColor = () => {
      if (
        document.documentElement.scrollTop > 79 ||
        document.body.scrollTop > 79
      ) {
        setBgColor("nav-scroll-color");
      } else if (
        document.documentElement.scrollTop < 80 ||
        document.body.scrollTop < 80
      ) {
        setBgColor("nav-scroll-color");
        
      }
    };
  
    return (
      <nav className={`navbar navbar-expand-lg fixed-top bg-dark-1 `}   >
        <div className="container-fluid">

       
          <a href="/" className="navbar-brand">
            <img alt='logo' className='img-fluid'  src={logo} height={75} width="190px"/>

          </a>
       
          <IconButton 
            onClick={() => setNavbarIconClick(!NavbarIconClick)}
            className="navbar-toggler f-right bg-white" 
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            icon={ NavbarIconClick ? <CloseIcon />  : <MenuIcon />} 
            circle 
            size="lg" />

          <div className="collapse text-center bg-dark-1 navbar-collapse  justify-content-end" id="navbarNav">
            <ul className="navbar-nav d-flex ">
              <li className="nav-item">
                <NavLink className="nav-link " to="/" >Accueil</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link nav-link-faire-don pe-4 text-white" to="/make_donation" >
                  <span className="span-icon-heart" >
                  <i className="fa-solid fa-heart icon-heart"></i>
                  </span> 
                 Faire un Don</NavLink>
              </li>

              { userToken &&(
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/my_actions" >Vos actions</NavLink>
                  </li>

                  <li className="nav-item nav-item-phone">
                    <NavLink className="nav-link" to="/monprofil" >Mon profil</NavLink>
                  </li>

                  <li id="dropdown-item-logout-btn" className="nav-item nav-item-phone ">
                      <a className="dropdown-item dropdown-item-logout-btn text-white" >
                          Deconnexion
                      </a>
                  </li>
                 

                  <li className="nav-item dropdown nav-item-pc">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Mon compte
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink className="dropdown-item" to="/monprofil" >Mon profil</NavLink>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li id="dropdown-item-logout-btn" >
                        <a  
                        onClick={()=>onClickLogout()}
                        className="dropdown-item dropdown-item-logout-btn text-white" 
                         href="#">
                          Deconnexion
                        </a>
                        </li>
                    </ul>
                  </li>

              </>
              )
              }
                { !userToken &&(
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/sign_up" >Inscription</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink 
                      onClick={()=>onClickLogout()}
                      className="nav-link" 
                      to="/sign_in" >
                        Connexion
                        </NavLink>
                    </li>
                  </>
                ) }

          
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavbarApp ;
