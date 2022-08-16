import React,{useState} from "react";
import { useEffect } from "react";
import { Steps,Notification,Loader,Panel,IconButton } from 'rsuite';
import axiosInstance from "../../api/axiosInstance";
import FirstStepDonation from "../../components/makeDonation/fisrtStepComponent/FirstStepDonation";

import SecondeStepDonation from "../../components/makeDonation/secondeStepComponent/SecondeStepDonation";
import ThirdStepComponent from "../../components/makeDonation/thirdStepComponent/ThirdStepComponent";

import './MakeDonation.css';




function MakeDonation() {
  const displayNone = "d-none"
  const [step, setStep] = React.useState(0);
  const [stepLoader, setStepLoader] = React.useState(false);
  const [isLoadingDonation, setIsLoadingDonation] = React.useState(false);
  const [montantDon,setMontantDon] = useState('')


  /*{
        "typeDons":"Argent",
        "categorieV":"Urgences",
        "cibleV":"Accidents",
        "montant":"50000",
        "provider":"CINETPAY",
        "affecter":false
    }*/

  const onChange = nextStep => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  const onSubmitMakeDonation = async (e)=>{

    e.preventDefault();
    setIsLoadingDonation(true)
    const dataDonation= {
      "typeDons":"Argent",
      "categorieV":"Urgences",
      "cibleV":"Accidents",
      "montant":montantDon,
      "provider":"CINETPAY",
      "affecter":false
      }
    const requestResponse = await axiosInstance.post("efdoargent/",dataDonation)
    if(requestResponse){

      console.log(requestResponse)
    setIsLoadingDonation(false)
    }
  }
  

  useEffect(()=>{

    setStepLoader(true)

    const loaderTImer = setTimeout(()=>{
      setStepLoader(false)
    },1000)

    return(()=>{
      clearTimeout(loaderTImer)
    })

  },[step])

  return (
    <div className="make-donation-container">
      <div className="container pb-5">
        <h2 className="h2">
          Faites des dons
        </h2>

        <div className="make-donation-steps-container pb-5">
          <div>
            <Panel shaded className="make-donation-step-header bg-white">
              <Steps current={step} currentStatus="process" >
                <Steps.Item  />

                <Steps.Item  />
                
                <Steps.Item  />
              </Steps>
            </Panel>
          
          {
            stepLoader 
            ? (
              <div className="stepLoader-contenair" >
                <Loader size="lg" center />
              </div>
            ):(
              <>
            
            <div data-aos="zoom-in" className="make-donation-step-container" >
              
              <div className={`make-donation-first-step ${step !=0 && displayNone} ` }>
                <FirstStepDonation onNextStep={onNext} onPreviousStep={onPrevious}  />
              </div>

              <div className={`make-donation-first-step ${step !=1 && displayNone} ` }>
                
                <SecondeStepDonation onNextStep={onNext} onPreviousStep={onPrevious} />
                
              </div>

              <div className={`make-donation-first-step ${step !=2 && displayNone} ` }>
                
                <ThirdStepComponent 
                onSubmitMakeDonation={onSubmitMakeDonation} 
                montantDon={montantDon} 
                setMontantDon={setMontantDon} 
                isLoadingDonation={isLoadingDonation} 
                onNextStep={onNext} 
                onPreviousStep={onPrevious} />
                
              </div>

            </div>
            
          {/*<ButtonGroup>
              <Button onClick={onPrevious} disabled={step === 0}>
                Previous
              </Button>
              <Button onClick={onNext} disabled={step === 3}>
                Next
              </Button>
           </ButtonGroup>*/}

            <div  className="mt-4 mb-5 step-btn-contenair ">
                <button onClick={onPrevious} type="button" className={`btn btn-primary py-3 px-5 float-start ${step ===0 && "d-none"} `}>
                    <i className="fa-solid fa-arrow-left me-3"></i>
                    Précédent
                </button>
                <button onClick={onNext} type="button" className={`btn btn-primary py-3 px-5 float-end ${step !==1 && "d-none"} `}>
                    Suivant
                    <i className="fa-solid fa-arrow-right ms-3"></i>
                </button>
            </div>

            <div className="mt-4 mb-5 step-btn-contenair-md">
                <IconButton
                  icon={<i className="fa-solid fa-arrow-left m-2"></i>}
                  circle 
                  size="lg" 
                  onClick={onPrevious}
                  className={`btn btn-primary float-start p-3 ${step ===0 && "d-none"} `}
                  />

                <IconButton
                  icon={<i className="fa-solid fa-arrow-right m-2"></i>}
                  circle 
                  size="lg" 
                  onClick={onNext}
                  className={`btn btn-primary float-end p-3 ${step !==1 && "d-none"} `}
                  />
             
            </div>
     
            </>) }

          </div>
 
        </div>
      </div>

     
    </div>
  );
}

export default MakeDonation;
