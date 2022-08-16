import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import {  MDBInput,MDBCheckbox,} from 'mdb-react-ui-kit';
import {  Message,Button, IconButton, ButtonGroup, ButtonToolbar, Panel } from 'rsuite';

import signUpImage from '../../assets/images/singup/singup.gif';
import axiosInstance from '../../api/axiosInstance';
import { parsingDataResponse } from '../../services/parsingDataResponse';

import './SignUp.css';




function SignUp() {
  const [prenomUser, setPrenomUser] = useState("");
  const [nomUser, setNomUser] = useState("");
  const [numeroTel, setNumeroTel] = useState("");
  const [email, setEmail] = useState("");

  const [nomEntreprise, setNomEntreprise] = useState("");
  const [emailEntreprise, setEmailEntreprise] = useState("");
  const [numeroTelEntreprise, setNumeroTelEntreprise] = useState("");
  
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isOganisation, setIsOganisation] = useState(false);
  const [isOganisationStep, setIsOganisationStep] = useState(0);

  const [singUpLoader, setSingUpLoader] = useState(false);

  const [singUpError, setSingUpError] = useState(false);

  const [messageErrorContent, setMessageErrorContent] = useState([]);
  const [messageSuccessContent, setMessageSuccessContent] = useState("");
  
  
  const navigate = useNavigate(); 


  function onChangeIsOrganistion(){
    setIsOganisation(!isOganisation)
  }






  const submitFunctionSignUp = async e  => {

    e.preventDefault();
    setSingUpLoader(true)
    setSingUpError(false)

    const pathUrl = !isOganisation? "donateurorg/" : "donateurm/"
    const dataUser = !isOganisation? {
                    last_name: prenomUser,
                    user_name: nomUser,
                    numero: numeroTel,
                    email: email,
                    password: password,
                  }:{
                  last_name: prenomUser,
                  user_name: nomUser,
                  organisations: nomEntreprise,
                  email: emailEntreprise,
                  numero: numeroTelEntreprise,
                  password: password
                  
                }

  
    const responseRequest =  await axiosInstance.post(pathUrl,dataUser)
    if(responseRequest){
     const  { responseStatus,  responseMessage,  responseData } = parsingDataResponse(responseRequest)

     switch(responseStatus){
      case 200 :{
          setSingUpLoader(false)
          setMessageSuccessContent(responseMessage)
          navigate('/redirect',{state:{message:messageSuccessContent},replace:true})
        

        };   break;
        case 400:{
          setMessageErrorContent(responseMessage)
          setSingUpError(true)
          setSingUpLoader(false)
           };   break;
      default:{
          setMessageErrorContent(responseMessage)
          setSingUpError(true)
          setSingUpLoader(false)
         };   break;
     }
    }
  
  }


  return (
    <div className="sign-up-container ">
      
      <div className="container mt-5">
        <div  className="sign-up-container-inner">

         

            <Panel shaded className="sign-up-form-container bg-white "
      >   
          <h2 className="sign-up-title text-center">Inscription</h2>
         <div className="sign-up-img-container text-center">
            <img src={signUpImage} alt="logo login" className="sign-up-img" />
       </div> 
       
          <Message className={`mx-auto ${!singUpError && "d-none" }`} closable showIcon type="error" header="Erreur">
            <ul>
              {
                messageErrorContent.map((item, index) =>{
                  return(
                    <li key={index} >{item}</li>
                  )
                })
              }
            </ul>
          </Message>
      

          <div className="py-4">
            <MDBCheckbox name='flexCheck' checked={isOganisation === true} value={isOganisation} onChange={()=>onChangeIsOrganistion()} id='flexCheckDefault' label='Etês-vous une Organisation ?' />
          </div>

          <form onSubmit={submitFunctionSignUp} >
            <div className={`is-organisation-content ${ !isOganisation && 'd-none' }`}  >
              <div className={`${isOganisationStep != 0 && 'd-none' } `}   >

                <p className="" >
                  Informations personnelles
                </p>
                <MDBInput 

                  className='mb-4 sign-up-input' 
                  type='text' 
                  label="Entrer votre prénom"
                  placeholder='Amidou'
                  value={prenomUser}
                  onChange={e => setPrenomUser(e.target.value)}
                  />
                  <MDBInput 
                    className='mb-4 sign-up-input' 
                    type='text' 
                    label="Entrer votre nom"
                    placeholder='Touré'
                    value={nomUser}
                    onChange={e => setNomUser(e.target.value)}
                    />
                  <MDBInput
                    className='mb-4 sign-up-input' 
                    type='password' 
                    label='Entrer un mot de passe'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                  <MDBInput
                      className='mb-4 sign-up-input' 
                      type='password' 

                      label='Confirmer le mot de passe' 
                      value={passwordConfirm}
                      onChange={e => setPasswordConfirm(e.target.value)}
                      />

              </div>

              <div className={`${isOganisationStep != 1 && 'd-none' } `}  >

                <p className="" >
                Informations de l'organisation
                </p>
                <MDBInput 
                className='mb-4 sign-up-input' 
                type='text' 
                label="Entrer la raison sociale de l'entreprise"
                placeholder='lanfiactech'
                value={nomEntreprise}
                onChange={e => setNomEntreprise(e.target.value)}
                />
                <MDBInput 
                className='mb-4 sign-up-input' 
                type='email' 
                label='Entrer une adresse electronique' 
                placeholder='lanfiactech@gmail.com'
                value={emailEntreprise}
                onChange={e => setEmailEntreprise(e.target.value)}
                />

                <MDBInput 
                className='mb-4 sign-up-input' 
                type='text' 
                label='Entrer un numéro de téléphone' 
                placeholder='+225 01 01 01 01 22'
                value={numeroTelEntreprise}
                onChange={e => setNumeroTelEntreprise(e.target.value)}
                />

               

              </div>
            </div>





            <div className={`${ isOganisation && 'd-none' }`}  >
              <MDBInput 
                className='mb-4 sign-up-input' 
                type='text' 
                label="Entrer votre prénom"
                placeholder='Amidou'
                value={prenomUser}
                onChange={e => setPrenomUser(e.target.value)}
                />
                <MDBInput 
                  className='mb-4 sign-up-input' 
                  type='text' 
                  label="Entrer votre nom"
                  placeholder='Touré'
                  value={nomUser}
                  onChange={e => setNomUser(e.target.value)}
                  />
                <MDBInput 
                className='mb-4 sign-up-input' 
                type='email' 
                label='Entrer votre adresse electronique' 
                placeholder='lanfiactech@gmail.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <MDBInput 
                className='mb-4 sign-up-input' 
                type='text' 
                label='Entrer votre numéro de téléphone' 
                placeholder='+225 01 01 01 01 22'
                value={numeroTel}
                onChange={e => setNumeroTel(e.target.value)}
                />

                <MDBInput
                 className='mb-4 sign-up-input' 
                 type='password' 
                 label='Entrer un mot de passe'
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 />
                 <MDBInput
                  className='mb-4 sign-up-input' 
                  type='password' 

                  label='Confirmer le mot de passe' 
                  value={passwordConfirm}
                  onChange={e => setPasswordConfirm(e.target.value)}
                  />


            </div>
                <div className={`d-flex justify-content-between justify-item-center ${ !isOganisation && 'd-none' }`} > 
                 
                  <Button size="lg" onClick={()=>setIsOganisationStep(isOganisationStep - 1 )} disabled={isOganisationStep < 1 && true} color="cyan" appearance="primary">
                    Précedent
                  </Button>
                  <Button size="lg" onClick={()=>setIsOganisationStep(isOganisationStep + 1)}  className={` ${isOganisationStep ==1 && 'd-none'} `} disabled={isOganisationStep == 1 && true} color="cyan" appearance="primary">
                     Suivant
                  </Button>

                  <Button size="lg" loading={singUpLoader} type="submit" className={` ${isOganisationStep !=1 && 'd-none'} `} color="cyan" appearance="primary">
                     Enregistrement
                  </Button>

                </div>

                <div className={`${ isOganisation && 'd-none' }`}> 
                 
                  <Button  loading={singUpLoader} type='submit' className='py-3' size='lg' block color="cyan" appearance="primary">
                  Enregistrement
                  </Button>

                </div>
               
            </form>



         
            </Panel>
        </div>
      </div>
      
   
    </div>
  );
}

export default SignUp;