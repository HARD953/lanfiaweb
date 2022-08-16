import React,{useState} from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import {  Message,Button, IconButton, ButtonGroup, Panel } from 'rsuite';

import signInImage from '../../assets/images/login/user.gif';


import './SignIn.css';
import useToken from '../../hooks/useToken';

import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';


async function loginUser(dataUser) {
  return fetch('https://apidons.herokuapp.com/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  })
    .then(data => data.json())
    .catch(error => console.log(error));
 }

 

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [isErrorSignIn, setIsErrorSignIn] = useState(false);
  const { token, setToken } = useToken();
  
  const navigate = useNavigate()

  const submitFunction = async e => {

    e.preventDefault();
    setIsErrorSignIn(false)
    setIsloading(true)

    const dataUser = {
      email,
      password
    }

    //console.log(dataUser)
    //const token = await axiosInstance.post('token/',dataUser)
    const responseUser = await loginUser(dataUser)
    if(responseUser.access){
      const token = {token: responseUser.access}
      setToken(token);
      console.log(token)
      setIsloading(false)
      props.setIsLoadingRefresh(!props.isLoadingRefresh)
      navigate('/',{replace:true})
    }
    else{
      setIsErrorSignIn(true)
      setIsloading(false)
    }
    
  }

  return (
    <div className="sign-in-container ">
      
      <div className="container mt-5">
        
          <div className="sign-in-container-content-side">
            <Panel shaded className="sign-in-form-container bg-white"
      >   
          <h2 className="sign-in-title text-center">Connexion</h2>
          <div className="sign-in-img-container text-center">
            <img src={signInImage} alt="logo login" className="sign-in-img" />
          </div>
         
          <Message className={`mx-auto mb-4 ${!isErrorSignIn && "d-none" }`} closable showIcon type="error" header="Erreur d'authentification">
            <p>
              Mot de passe 
              ou Adresse electronique incorrects
            </p>
          </Message>

            <form onSubmit={submitFunction} >
                <MDBInput 
                className='mb-4 sign-in-input' 
                type='email' 
                label='Entrer votre adresse electronique' 
                onChange={e => setEmail(e.target.value)}
                
                />
                <MDBInput
                 className='mb-4 sign-in-input' 
                 type='password' 
                 label='Entrer votre mot de passe' 
                 onChange={e => setPassword(e.target.value)}
                 />

                <MDBRow className='mb-4'>
                  <MDBCol>
                    <a href='#!'>Mot de passe oublié ?</a>
                  </MDBCol>
                </MDBRow>

                <Button loading={isloading} className="sign-in-btn text-white" type='submit' block>
                  Connexion
                </Button>
            </form>

        
            </Panel>
          </div>
      </div>
      
   
    </div>
  );
}

export default SignIn;